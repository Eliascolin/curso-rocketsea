export class GithubUser{

    static search(username){
    
    const enspoint = `https://api.github.com/users/${username}`
    
    
    return fetch(enspoint)
    .then(data => data.json())
    .then(({login, name, public_repos, followers}) => ({
    
    login,
    name,
    public_repos,
    followers
    }))
    }
    
    }
    
    