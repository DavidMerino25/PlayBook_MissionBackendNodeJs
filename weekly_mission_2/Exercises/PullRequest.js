const PullRequest ={
    title:"Create my Code",
    branchname:"main",
    dateCreated: Date(),
    status:"Acepted",
    autor:"David",
    repositoryNameAssociated:"Launh-PlayBook",

    getStatus: function(){
        return this.status
    },
    getTitleandAutor: function(){
      return `Title: ${this.title}, Autor: ${this.autor}`  
    }
    
}