import { APIErrorCode } from '../types/service/APIErrorCode';

export const fetchWithTimeout = (url: string, timeout: number) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(
        () =>
          reject({
            code: APIErrorCode.CONNECTION_TIMEOUT,
            message: 'Sorry, there seems to be connectivity issues...',
          }),
        timeout
      )
    ),
  ]);
};
