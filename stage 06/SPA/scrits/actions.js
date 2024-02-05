const routes = {

    '/exprorer': '/pages/exprore.html',
    404 : "/pages/404.html",
    '/universo' : '/pages/universo.html'

}





export function route(event){

   
    event = event || window.event

    event.preventDefault()

    window.history.pushState({},"", event.target.href)
    handle()
    
    }


    export function handle(){

const {pathname} = window.location
// windows.location.pathname pega o link depois do nome do dominio

const route = routes[pathname] || routes[404]


// fetch(route)
// .then(data=>data.text())
// .then(html=>console.log(html))

console.log(pathname)
console.log(route)


    }