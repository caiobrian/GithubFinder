import { githubApiToken, githubBaseUrl } from '@app/shared/config';

export const findUserByUsername = async (username: string) => {
  if (!githubApiToken) {
    throw new Error('Token de API não configurado');
  }

  const response = await fetch(`${githubBaseUrl}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${githubApiToken}`,
    },
  });

  if (response.status === 404) {
    throw new Error('Usuário não encontrado');
  }

  if (!response.ok) {
    throw new Error('Erro ao buscar usuário');
  }

  const user = await response.json();
  return user;
};
