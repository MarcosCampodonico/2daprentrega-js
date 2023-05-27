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