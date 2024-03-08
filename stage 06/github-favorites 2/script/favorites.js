import { GithubUser } from "./GithubUser.js"






// logica dos dados


export class Favorites{

    constructor(root){
    
       this.root = document.querySelector(root)

     this.tbody = this.root.querySelector("table tbody")

        this.load()
        GithubUser.search("eliascolin").then(user=>console.log(user))

    }


    load(){



        this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []
     
     
     console.log(this.entries)
      


    
    }

    save(){

localStorage.setItem("@github-favorites:", JSON.stringify(this.entries))

    }
    


  async  add(username){

try{
   


const userExists = this.entries.find(entry => entry.login === username)

if(userExists) {
throw new Error("Usuario ja cadastrado")
}
    const user =  await   GithubUser.search(username)

    if(user.login === undefined){

        throw new Error("Usuario não encontrado!")
    }


this.entries =[user, ...this.entries]
this.update()
this.save()

} catch(error){


    alert(error.message)
}
   
    }

    delete(user){

        
    const filteredEntries = this.entries
    .filter(entry=>entry.login !==user.login)

this.entries = filteredEntries
this.update()
this.save()
this.deleteNone()
}

    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    //visualizaçao e eventos
    
    
    
    
    
    export class FavoritesView extends Favorites{
   

        constructor(root){


            super(root)
           this.update()
           this.anadd()
        }



anadd(){

const addButton = this.root.querySelector('.search button')

addButton.onclick = () =>{

const {value} = this.root.querySelector('.search input')

this.add(value)


}

}

deleteNone(){

   
const counsEntrie = this.entries.length

const none = this.root.querySelector(".none")

if(counsEntrie > 0){
   
    none.style.display = "none"; 
}else {
    none.style.display = "flex"; 
}



}

update(){


  this.removeAllTr()
this.entries.forEach(user=>{
    const row = this.createRow()
   
    row.querySelector('.user img').src =`https://github.com/${user.login}.png`
    row.querySelector('.user img').alt =`Imagem de ${user.name}`
    row.querySelector('.user a').href = `https://github.com/${user.login}`
row.querySelector('.user p').textContent = user.name
row.querySelector('.user span').textContent = user.login
row.querySelector('.repositories').textContent = user.public_repos
row.querySelector('.followers').textContent = user.followers

row.querySelector(".remove").onclick = () =>{

const isOk = confirm("tem certeza que deseja deletar essa linha?")

if(isOk){

    this.delete(user)


}


}

this.tbody.append(row)

} 
 )




this.deleteNone()
}



createRow(){

const tr = document.createElement('tr')





tr.innerHTML = `

   
                        <td class="user">
                            <img src="https://github.com/Eliascolin.png" alt="imagen">
                            <a href="https://github.com/Eliascolin" target="_blank">
                                <p>Elias</p>
                                <span>EliasColin</span>
                            </a>
                        </td>
                        <td class="repositories">76</td>
                        <td class="followers">53456</td>
                        <td><button class="remove">Remover</button></td>

    `

 
return tr



}



removeAllTr(){

    this.tbody.querySelectorAll('tr').forEach((tr)=>{tr.remove()});

}


    }