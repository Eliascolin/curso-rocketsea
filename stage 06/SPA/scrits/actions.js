import { appContain } from "./elemens.js"

class Route{



add(routeName,page){

this.routes[routeName]= page



}


   route(event){

   
        event = event || window.event
    
        event.preventDefault()
    
        window.history.pushState({},"", event.target.href)
        this.handle()
        
        }



        handle(){

            const {pathname} = window.location
            
            
            
            const route = this.routes[pathname] || this.routes['404']
            
             fetch(route)
              .then(data=>data.text())
              .then(html=>{
            
            appContain.innerHTML= html
            
              })
            
            
            
            
            
                }

}


export default new Route()



// const routes = {
//     '/':"/pages/home.html",
//     '/exprorer': '/pages/exprore.html',
//     '404' : "/pages/404.html",
//     '/universo' : '/pages/universo.html'

// }








 


 window.onpopstate = () => handle()