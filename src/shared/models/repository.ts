export interface Repository {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  html_url: string;
  owner: {
    url: string;
  };
}
