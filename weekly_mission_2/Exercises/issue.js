const Issue ={
    title:"Problem with code",
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
        return `Name of Repository: ${this.repositoryNameAssociated} Status: ${this.status} Number of commets: ${this.numberOfComments} Labels: ${this.labels}`
    } 
}
console.log(Issue.getTitleAndAuthor());
console.log(Issue.getGeneralInfo());
// Son ejemplos de como hacer un objeto