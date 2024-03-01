import { fetchWithTimeout } from '../utils/fetch';

class UserService {
  static URL = '/api/data/users?timeout=10000';

  async getUsers(): Promise<{
    success: boolean;
    data?: { users: any };
    error?: any;
  }> {
    return await fetchWithTimeout(UserService.URL, 5000)
      .then((res) => res.json())
      .then(({ users }) => ({ success: true, data: { users } }))
      .catch((error) => ({ success: false, error }));
  }
}

export default new UserService();
