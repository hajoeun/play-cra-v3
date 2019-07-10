export const GithubAPI = async () => {
  const url = 'https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000';
  const result = await fetch(url);

  return result.json();
};