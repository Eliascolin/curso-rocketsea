import { appContain } from "./elemens.js"



export class Router{

routes = {}

 backgrounds = { 

  "/universo":"../img/mountains-universe02.png",

  "/":"../img/mountains-universe-1.png",

  "/exprorer" :"../img/mountains-universe-3.png",

 


  }

add(routeName,page){

this.routes[routeName] = page



}




   route(event){

   
        event = event || window.event
    
        event.preventDefault()

        // event.target.style.color = "blue"
    
        window.history.pushState({},"", event.target.href)
        this.handle()
        
        }



        handle(){

            const {pathname} = window.location
            
            
            
            const route = this.routes[pathname] || this.routes['404']

            

           this.changeBackground(pathname)
            
             fetch(route)
              .then(data=>data.text())
              .then(html=>{
            
            appContain.innerHTML= html
            
              })
            
                }


               changeBackground(pathname){

                 const background = this.backgrounds[pathname] || "/"


                
                 document.body.style.backgroundImage = `url(${background})`

                   console.log(background)
                 }


}





