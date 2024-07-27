import { Repository } from './repository';

export interface User {
  id: number;
  username: string;
  name: string;
  avatar_url: string;
  bio: string;
  email: string;
  followers: number;
  public_repos: number;
  repos_url: string;
  repos: Repository[];
}
