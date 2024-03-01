import React, { useEffect, useState } from 'react';
import { fetchWithTimeout } from './utils/fetch';
import { APIErrorCode } from './types/service/APIErrorCode';
import UserService from './services/UserService';

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const handleFetchUsers = async () => {
    setErrorMessage('');

    const { success, error, data } = await UserService.getUsers();

    if (success) setUsers(data?.users);
    else if (error?.message) setErrorMessage(error.message);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {errorMessage && (
          <div className="flex flex-row items-center">
            <p className="mr-2">{errorMessage}</p>{' '}
            <button
              onClick={handleFetchUsers}
              className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
            >
              Try again
            </button>
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
