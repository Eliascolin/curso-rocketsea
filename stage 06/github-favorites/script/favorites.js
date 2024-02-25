//classe que vai conter a logica dos dados ->como serao estruturados

export class favorites{

    constructor(root){

        this.root =document.querySelector(root)
this.load()
    }


load(){


  this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []

console.log(this.entries)



 
   


}

delete(user){

const filteredEntries = this.entries
.filter(entry => 
  entry.login !==user.login)

this.entries = filteredEntries
this.update()
}

}


//classe que vai criar a visualizacao e eventos do html

export class favoritesView extends favorites{


constructor(root){

    super(root)

   this.tbody = this.root.querySelector('table tbody')

    this.update()

}


update(){
this.removeAllTr()



this.entries.forEach(user =>{

  const row = this.createRow()
  
  row.querySelector('.user img').src =`https://github.com/${user.login}.png`
    row.querySelector('.user img').alt =`Imagem de ${user.name}`
row.querySelector('.user p').textContent = user.name
row.querySelector('.user span').textContent = user.login
row.querySelector('.repositories').textContent = user.public_repos
row.querySelector('.followers').textContent = user.followers

row.querySelector('.remove').onclick = () => {

const isOk = confirm("Tem certeza que deseja deetar essa linha?")


if(isOk){

this.delete(user)

}

}

  this.tbody.append(row)
    })


    
}




createRow(){

const tr = document.createElement("tr")


tr.innerHTML =`


    <td class="user">
    
    <img src="https://github.com/Eliascolin.png" alt="imagen">

    <a href="https://github.com/Eliascolin" target="_blank">

        <p>Nome</p>
        <span>Github nome</span>

    </a>
    

</td>

  <td class="repositories">
           76
         </td>
         <td class="followers">
           9589
         </td>
         <td>
           <button class="remove">&times;</button>
         </td>

    `
return tr
   

}

removeAllTr(){

    
    
    this.tbody.querySelectorAll('tr')
    .forEach((tr)=>{
    
    tr.remove()
    
    })

}

}

