import { useCallback, useState } from 'react';

import { RequestError, RequestStatus, User } from '@app/shared/models';
import { findRepositoriesByUsername, findUserByUsername } from '../api';

export interface UseGetUserResult {
  user: User;
  status: RequestStatus;
  errorMessage: string;
  onSearchUser: (username: string) => Promise<void>;
  onClearUser: () => void;
}

async function fetchUserData(username: string): Promise<User> {
  const user = await findUserByUsername(username);
  if (user.id) {
    const repos = await findRepositoriesByUsername(username);
    return { ...user, repos };
  }
  return user;
}

export function useGetGithubData(): UseGetUserResult {
  const [user, setUser] = useState<User>({} as User);
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSearchUser = useCallback(async (username: string) => {
    setStatus(RequestStatus.LOADING);

    setErrorMessage('');
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
      setStatus(RequestStatus.IDLE);
    } catch (error) {
      setStatus(RequestStatus.ERROR);
      setErrorMessage((error as RequestError).message);
    }
  }, []);

  const onClearUser = useCallback(() => {
    setUser({} as User);
    setStatus(RequestStatus.IDLE);
    setErrorMessage('');
  }, []);

  return {
    user,
    status,
    errorMessage,
    onSearchUser,
    onClearUser,
  };
}
