import { appContain } from "./elemens.js"



const routes = {
    '/':"/pages/home.html",
    '/exprorer': '/pages/exprore.html',
    '404' : "/pages/404.html",
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



const route = routes[pathname] || routes['404']

 fetch(route)
  .then(data=>data.text())
  .then(html=>{

appContain.innerHTML= html

  })





    }


 window.onpopstate = () => handle()