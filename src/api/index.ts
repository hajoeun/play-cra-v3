export interface ResponseItem {
  id: number;
  score: number;
  type: string;
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  url: string;
}

export interface GithubResponse {
  incomplete_results: boolean;
  items: Array<ResponseItem>;
  total_count: number;
}

export const GithubAPI = async (): Promise<GithubResponse> => {
  const url = 'https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000';
  const result = await fetch(url);

  return result.json();
};
