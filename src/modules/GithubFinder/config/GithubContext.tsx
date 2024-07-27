import React, { createContext, ReactNode } from 'react';

import { RequestStatus, User } from '@app/shared/models';
import { useGetGithubData } from '../hooks';

type GitHubContextType = {
  user: User;
  status: RequestStatus;
  errorMessage: string;
  onSearchUser: (username: string) => void;
  onClearUser: () => void;
};

export const GitHubContext = createContext<GitHubContextType>({
  user: {} as User,
  status: RequestStatus.IDLE,
  errorMessage: '',
  onSearchUser: () => {},
  onClearUser: () => {},
});

export const GitHubProvider = ({ children }: { children: ReactNode }) => {
  const data = useGetGithubData();

  return (
    <GitHubContext.Provider value={{ ...data }}>
      {children}
    </GitHubContext.Provider>
  );
};
