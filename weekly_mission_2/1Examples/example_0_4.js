// Ejemplo 4: Objeto con Mètodos
const pet = {
	name:"Chalino",
	//Esta es una funcion que se guarda como propiedad
	sayHello: function(){
		console.log(`${this.name} Te saluda en español!`)
	}
}
console.log("Ejemplo 4: Objeto con mètodo que recibe parametros")
pet.sayHello()
