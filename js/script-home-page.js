// const dados = async() => {
//     const dadosGithub = await fetch("https://api.github.com/users/padumaciel")
//     console.log(dadosGithub)
//     const dadosGithubJson = await dadosGithub.json();
//     console.log(dadosGithubJson)
// };

// const retornoHtml = document.querySelector("#retornaHTML")
// // const userNotFound = document.querySelector("#usuarioNotFound")



// const getUsuario = async () => {
//     try {
//         const rotaApi = await fetch(`https://api.github.com/users/padumaciel`)
//         form.reset();
//         if (rotaApi.status === 404) {
//         throw new Error();
//         }
//         const informacoesDoUsuario = await rotaApi.json();
//         retornoHtml.innerHTML = criarCardUsuario(informacoesDoUsuario)
//     } catch {
//         console.log("erro");
//     }
//     }

// const criarCardUsuario = (nomeUsuario) => {

//     const { login, name, bio, followers, public_repos, avatar_url } = nomeUsuario;
//     return `
//     <div class="card__user">
//     <picture class="image__user">
//         <img class="user__image" src="${avatar_url}" alt="" />
//     </picture>
//     <div class="user__card"> 
//     <h2 class="user__name spacing">${name ? name : ' '}</h2>
//     <p class="user__username paragraph spacing">${login}</p>
//     <p class="user__bio paragraph spacing">${bio ? bio : ' '}</p>
//     <div class="followersRepos">
//     <div class="badges spacing">
//     <div class="badge followers">
//     <span class="material-icons icon__profile">people_outline</span>
//     <p>${followers}</p>
//     </div>
//     <div class="badge userRepos">
//     <span class="material-icons icon__profile">class</span>
//     <p>${public_repos}</p>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
// `;
// }
// const getUsuarioRepos = async () => {
//     try {
//         const rotaApi = await fetch(`https://api.github.com/users/padumaciel/repos`)
//         if (rotaApi.status === 404) {
//         throw new Error();
//         }
//         const informacoesDoUsuario = await rotaApi.json();
//         retornoHtml.innerHTML += criarListaReposUsuario(informacoesDoUsuario)
//     } catch {
//         console.log("Erro!");
//     }
//     }

//     const criarListaReposUsuario = (value) => {
//     let htmlRepo = '';
//     if (value.length != 0) {
//         htmlRepo += '<div class="cards">';
//         for (let i = 0; i < value.length; i++) {
//         htmlRepo += `<div class="card__repo">
//                         <h1 class="tituloRepo">${value[i].name}</h1>
//                         <p class="descricaoRepo">${value[i].description ? value[i].description : ' '}</p>
//                     <div class="bolinha">${value[i].language ? value[i].language : ' '}</div>
//                     <div class="estrelinha">
//                     <span class="material-icons corEstrelinha">star_border</span>
//                     ${value[i].forks}</div>
//                 </div>`;
//         }
//         htmlRepo += '</div>';
//         return htmlRepo;
//     } else {
//         htmlRepo += `<p>Não tem repositórios públicos ainda.</p>`
//         return htmlRepo;
//     }
//     }