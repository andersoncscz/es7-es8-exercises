// ************************************ Dealing with mutiple Promises ************************************
const fetch = require("node-fetch");
const fetchFromGithub = async (endpoint) => {
    const url = `https://api.github.com/${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

const showGitHubUserAndRepos = async username => {
    /*
        If these two situations take 8 seconds each one to be done, we'll have a too long request (16 seconds), and it's not good for the user.
        How do we work around this kind of situation?
        
        These two request don't depend of each other, they can run parallely, so we don't need an async await aproach.
    */
    
    //Using async await, that is not useful in this situation.
    const user = await fetchFromGithub(`users/${username}`);
    const repos = await fetchFromGithub(`users/${username}/repos`);
    console.log('async await User: ', user.name)
    console.log('async await Repos: ', repos.length)
}


const showGitHubUserAndReposFaster = async username => {
    
    //Using concurrence, much better as described above. We are running bouth request at the same time
    
    //First we keep the references of our promises, not the result of them (resolve, reject)
    const userPromise = fetchFromGithub(`users/${username}`);
    const reposPromise = fetchFromGithub(`users/${username}/repos`);

    //In this case, we're running both in parallel, so the wait time to get the response will be the time of the promise that takes longer
    const user = await userPromise;
    const repos = await reposPromise;

    console.log('concurrence User: ', user.name)
    console.log('concurrence Repos: ', repos.length)    
}


const showGitHubUserAndReposFasterAll = async username => {
    //Another way to make concurrent requests a little bit less verbose, using Promise.all() 
    //Desestruct responses.
    const [user, repos] = await Promise.all([
        fetchFromGithub(`users/${username}`),
        fetchFromGithub(`users/${username}/repos`)
    ])
    console.log('Promise.all() User: ', user.name)
    console.log('Promise.all() Repos: ', repos.length)      
}


//Let's compare which approach in this kind of situation is more performatic.
showGitHubUserAndRepos('andersoncscz') //This will be the last one for sure.
console.log('\n\n')    
showGitHubUserAndReposFaster('andersoncscz') //This will finish in second place
showGitHubUserAndReposFasterAll('andersoncscz') //Probably this will finish in first place