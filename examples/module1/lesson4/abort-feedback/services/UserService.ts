import { User } from '../types/User';
import { fetchWithTimeout } from '../utils/fetch';

class UserService {
  static URL = '/api/data/users?timeout=10000';

  async getUsers(): Promise<{
    success: boolean;
    data?: { users: User[] };
    error?: any;
  }> {
    return await fetchWithTimeout<{ users: [] }>(UserService.URL, 5000)
      .then((result) => result)
      .catch((error) => error);
  }
}

export default new UserService();
