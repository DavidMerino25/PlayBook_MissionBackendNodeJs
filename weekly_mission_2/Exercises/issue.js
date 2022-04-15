const Issue ={
    title:"Prblem with code",
    repositoryNameAssociated:"LaunchBlog",
    status:"Opened",
    numberOfComments:10,
    labels:[
     "Code", "JS"
    ],
    author:"David Merino",
    dateOfCreate: '25/02/2020',
    lastUpdate: Date(),
    getTitleAndAuthor: function (params) {
    return `Issue: ${this.title} Author: ${this.author}`
    },
    getGeneralInfo: function (params) {
        
    }
}
console.log(Issue.getTitleAndAuthor);
