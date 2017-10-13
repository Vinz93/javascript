const fetch = require('node-fetch');


async function fetchGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}


/* sequentially */

async function showUserandRepos(account) {
  const time = Date.now();
  const user = await fetchGithub(`/users/${account}`);
  const repos = await fetchGithub(`/users/${account}/repos`);
  console.log(` Sequentially requests:
    ${user.name} has ${repos.length} repos
     time: ${Date.now() - time} ms `);
}

/* concurrent */

async function concurrent(account) {
  const time = Date.now();
  const userPromise = fetchGithub(`/users/${account}`);
  const reposPromise = fetchGithub(`/users/${account}/repos`);

  const [user, repos] = [await userPromise, await reposPromise];

  console.log(` Concurrent requests:
    ${user.name} has ${repos.length} repos
     time: ${Date.now() - time} ms`);
}

/* Promise.all() */

async function promiseAll(account) {
  const time = Date.now();
  const [user, repos] = await Promise.all([
    fetchGithub(`/users/${account}`),
    fetchGithub(`/users/${account}/repos`)
  ]);

  console.log(` Promise.all() :
    ${user.name} has ${repos.length} repos
     time: ${Date.now() - time} ms`);
}


showUserandRepos('vinz93');
concurrent('vinz93');
promiseAll('vinz93');
