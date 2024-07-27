import { useContext } from 'react';
import { GitHubContext } from '../config/GithubContext';

export const useGithubContext = () => {
  const context = useContext(GitHubContext);

  if (!context) {
    throw new Error('useGithubContext must be used within a GithubProvider');
  }

  return context;
};
