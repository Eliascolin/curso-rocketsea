import * as elemes from "./elemens.js"

import {Router} from "./actions.js"




const router = new Router()

router.add('/','/pages/home.html')

router.add('/exprorer','/pages/exprore.html')

router.add('404',"/pages/404.html")

router.add('/universo','/pages/universo.html')

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route()



// Evento de clic para homeLink
elemes.homeLink.addEventListener('click', () => router.route())
// Evento de clic para universoLink
elemes.universoLink.addEventListener('click', () => router.route())

// Evento de clic para exploracaoLink
elemes.exploracaoLink.addEventListener('click', () => router.route())


//Evento de error 
// elemes.errorLink.addEventListener('click', () => router.route())
