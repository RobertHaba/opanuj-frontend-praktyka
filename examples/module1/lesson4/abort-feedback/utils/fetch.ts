import { APIErrorCode } from '../types/service/APIErrorCode';

interface FetchWithTimeoutResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: APIErrorCode;
    message: string;
  };
}

export const fetchWithTimeout = async <T = any>(
  url: string,
  timeout: number
): Promise<FetchWithTimeoutResponse<T>> => {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(timeout) });
    return { success: true, data: await res.json() };
  } catch (err) {
    if (err?.name === APIErrorCode.Timeout) {
      return {
        success: false,
        error: {
          code: err.name,
          message: 'Sorry, there seems to be connectivity issues...',
        },
      };
    }
    return {
      success: false,
      error: {
        code: APIErrorCode.Unknown,
        message: 'Sorry, something went wrong...',
      },
    };
  }
};
