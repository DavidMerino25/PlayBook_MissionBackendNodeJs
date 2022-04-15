// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Timbo",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} say's hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Chalino")