/*for(i=0;i<2;i++){
let a =prompt("ingrese un producto acuatico")
let b =prompt("ingrese un accesorio para un deporte acuatico")
let c =prompt("ingrese una indumentaria para deporte acuatico")

const surf = [
    {id:1, nombre: a, precio: 1000},
    {id:2, nombre: b, precio: 1200},
    {id:3, nombre: c, precio: 1500},
]
for(const item of surf){
    alert(item.nombre)
    alert(item.precio)
}}*/



/*const maquinas= []
for(i=0;i<5;i++){
    let nombre=prompt("ingrese el nombre de la maquina")
    let wc=prompt("ingrese el nombre de el workcenter")
    let etapa=prompt("ingrese el nombre de la etapa del proceso")
    let objeto={
        nombre: nombre,
        workcenter:wc,
        etapa:etapa,
    }
    maquinas.push(objeto)
    for(const item of maquinas){
        alert(item.nombre)
        alert(item.workcenter)
        alert(item.etapa)
    }
}*/





/*function precio(x){//funcion con un parametro, que una vez aplicado ese parametro me puede returnar otra funcion
    if(x === "producto nacional"){
        return(a,b)=> a - b
    }
    if(x ==="producto importado"){
        return(a,b)=>a + b
    }

}
let productoNacional = precio("producto nacional")
console.log(productoNacional(1000,200))
let productoImportado = precio("producto importado")
console.log(productoImportado(1000,200))*/
/*const encontrar = productos.find(item => item.nombre==="tabla")
console.log(encontrar)*/

// recorrida de arreglos con metodos avanzados
//este va a ser el arreglo que se va a utilizar como base.
const productos = [
    {id: 1, nombre: "tabla", precio: 2000},
    {id: 2, nombre: "traje", precio: 1400},
    {id: 3, nombre: "killa", precio: 1600},
    {id: 4, nombre: "pita",  precio: 1800},
]

productos.forEach(item=>{
    alert(item.id)
    alert(item.nombre)
    alert(item.precio)
})

//ahora vamos a simular que estamos en la etapa del hot sale y por ende vamos a modificar el arreglo.
const hotSale = productos.map(item =>{
    return{
        id: item.id,
        nombre: item.nombre +" " + "hotsale",
        precio: item.precio * 0.80
    }
})
console.log(hotSale)
//ahora vamos a aplicar una funcion con un parametro y de acorde al tipo de bien que sea va realizar un descuento o un aumento.
function precio(pr){
    if(pr = "producto nacional"){
        return(a,b) => a*b
    }
    if(pr ="producto importado"){
        return(a,b) => a*b
    }
}
let cantidad = parseInt(prompt("ingrese la cantidad de productos que lleva"))
for(i=0;i<cantidad;i++){
let z =prompt("ingrese que tipo de producto es")

if(z ==="producto nacional"){
    var p =parseInt(prompt("ingrese el precio del producto"))
    var d = parseFloat(prompt("ingrese el descuento a aplicar"))
}
if(z ==="producto importado"){
    var p =parseInt(prompt("ingrese el precio del producto"))
    var d = parseFloat(prompt("ingrese el impuesto a aplicar"))
}
    

let producto1 = precio(z);
alert(producto1(p,d));
}