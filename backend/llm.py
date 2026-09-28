from openai import AsyncOpenAI

from config import LLM_API_KEY, LLM_BASE_URL, LLM_MODEL
from prompts import SYSTEM_PROMPT


def connected() -> bool:
    return bool(LLM_API_KEY and LLM_BASE_URL and LLM_MODEL)


async def answer_question(user_prompt: str) -> str:
    if not connected():
        raise RuntimeError('LLM API is not configured. Set LLM_API_KEY, LLM_BASE_URL, and LLM_MODEL.')
    client = AsyncOpenAI(
        api_key=LLM_API_KEY,
        base_url=LLM_BASE_URL,
        timeout=90,
    )
    try:
        response = await client.chat.completions.create(
            model=LLM_MODEL,
            messages=[
                {'role': 'system', 'content': SYSTEM_PROMPT},
                {'role': 'user', 'content': user_prompt},
            ],
            temperature=0.2,
        )
        answer = response.choices[0].message.content
        if not answer:
            raise RuntimeError('Cerebras returned an empty answer.')
        return answer.strip()
    except RuntimeError:
        raise
    except Exception as error:
        status_code = getattr(error, 'status_code', None)
        if status_code == 429:
            raise RuntimeError('Cerebras API rate limit reached. Please try again shortly.') from error
        raise RuntimeError('Cerebras API request failed. Please try again shortly.') from error
