import React from 'react';

import { GitHubProvider } from './config';
import { FindUser, UserData } from './screens';

export const GithubFinder = () => {
  return (
    <GitHubProvider>
      <FindUser />
      <UserData />
    </GitHubProvider>
  );
};
