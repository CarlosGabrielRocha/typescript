// Variável global de usuários
const users = [];
class User {
    id;
    login;
    name;
    bio;
    public_repos;
    repos_url;
    constructor(id, login, name, bio, public_repos, repos_url) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.bio = bio;
        this.public_repos = public_repos;
        this.repos_url = repos_url;
    }
}
// Funções
async function saveUser(username) {
    const userObt = await fetch(`https://api.github.com/users/${username}`)
        .then(response => {
        return response.json();
    });
    if (userObt.message) {
        console.log('O usuário não foi encontrado!');
    }
    else {
        let user;
        user = new User(userObt.id, userObt.login, userObt.name, userObt.bio, userObt.public_repos, userObt.repos_url);
        users.push(user);
    }
}
async function userInfo(login) {
    const user = findUser(login);
    let userRepos;
    if (user) {
        let allRepos = await getRepositories(login);
        userRepos = allRepos.reduce((accum, repository, indexof) => {
            if (indexof <= 4) {
                return accum += `.Nome: ${repository.name} #${repository.id}\n.Fullname: ${repository.full_name}\n.Privado: ${repository.private === true ? 'SIM' : 'NÃO'}\n\n`;
            }
            else {
                return accum;
            }
        }, ``);
        console.log(`------->${user.name}#${user.id}<-------\n==========\nBIO: ${user.bio}\n==========\nLOGIN: ${user.login}\nREPOSITÓRIOS PÚBLICOS: ${user.public_repos}\nREPOSITÓRIOS:\n${userRepos}`);
    }
}
function showUsers() {
    let usersString = users.reduce((accum, user) => {
        return accum += `------->${user.name}#${user.id}<-------\n==========\nBIO: ${user.bio}\n==========\nREPOSITÓRIOS PÚBLICOS: ${user.public_repos}\n\n`;
    }, ``);
    console.log(usersString);
}
function sumRepositories() {
    let sumString = users.reduce((accum, user) => accum + user.public_repos, 0);
    console.log(`A soa de repositórios de todos os usuários é ${sumString}`);
}
function findUser(login) {
    const user = users.find(user => user.login === login);
    if (user) {
        return user;
    }
    else {
        console.log('O usuário não foi encontrado!');
    }
}
async function getRepositories(login) {
    const user = findUser(login);
    let allRepos;
    allRepos = await fetch(user.repos_url).then(response => response.json());
    return allRepos;
}
function repositoriesRanking() {
    let usersInOrder = users.slice().sort((userA, userB) => {
        return userB.public_repos - userA.public_repos;
    });
    let rankingString = '';
    for (let index = 0; index < 5; index++) {
        let user = usersInOrder[index];
        rankingString += `${index + 1}- ${user.login}, ${user.public_repos} repositórios públicos.\n`;
        if (index + 1 >= usersInOrder.length)
            break;
    }
    console.log(rankingString);
}
