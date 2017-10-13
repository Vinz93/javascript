const fetch = require('node-fetch');

class GithubClient {
  async fetchGithub(account) {
    const url = `https://api.github.com/users/${account}`;
    const response = await fetch(url);
    return await response.json();
  }
}


(async () => {
  const client = new GithubClient();
  const user = await client.fetchGithub('vinz93');
  console.log(`${user.name}, ${user.location}.`);
})();

/* Promise chain */ 
const client2 = new GithubClient();
client2.fetchGithub('vinz93')
  .then(res => console.log('Chain response: ',res))
  .catch(err => console.log(err));
