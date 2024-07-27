import { githubApiToken, githubBaseUrl } from '@app/shared/config';
import { Repository } from '@app/shared/models';

export const findRepositoriesByUsername = async (
  username: string,
): Promise<Repository[]> => {
  const response = await fetch(`${githubBaseUrl}/users/${username}/repos`, {
    headers: {
      Authorization: `Bearer ${githubApiToken}`,
    },
  });

  if (!response.ok) {
    return [];
  }

  const repos = await response.json();
  return repos;
};
