//classe que vai conter a logica dos dados ->como serao estruturados

export class favorites{

    constructor(root){

        this.root =document.querySelector(root)

    }



}


//classe que vai criar a visualizacao e eventos do html

export class favoritesView extends favorites{


constructor(root){

    super(root)

    console.log(this.root)
    this.update()
}


update(){
this.removeAllTr()
}

removeAllTr(){

    const tbody = this.root.querySelector
    ('table tbody')
    tbody.querySelectorAll('tr')
    .forEach((tr)=>{
    
    tr.remove()
    
    })

}

}

