let plateaPreferida=7000;
let platea=5500;
let superPulman=5000;
let plateaCyL=4000;
let pullmanLateral=3500;
let cabecera=3000;
let iva=0.21;

function elegirSector(){
    let lugar=1
    while(typeof(lugar)==="number"){
        lugar=parseInt(prompt("Ingrese el numero del sector que desea:\n 1- Platea Preferida ($"+plateaPreferida+" + IVA) \n 2- Platea ($"+platea+" + IVA) \n 3- Super Pullman($"+superPulman+" + IVA) \n 4- Platea C y L ($"+plateaCyL+" + IVA) \n 5- Pullman Lateral ($"+pullmanLateral+" + IVA) \n 6- Cabecera ($"+cabecera+" + IVA)"));
        if ((typeof(lugar)==="number")&&(lugar>0&&lugar<7)){
            return lugar;
        }else{
            alert ("ERROR!!! Opcion incorrecta!! vuelva a ingresar una opcion");
            lugar=0;
        }
    }
    return;
}
function calcularCosto(){
    while (cantEntradas==0){
        cantEntradas= parseInt(prompt("Ingrese cantidad de entradas que desea comprar"));
        if ((typeof(cantEntradas)==="number")&&(cantEntradas>0)){
            switch (sector){
                case 1:
                    return plateaPreferida*cantEntradas;
                case 2:
                    return platea*cantEntradas;
                case 3:
                    return superPulman*cantEntradas;
                case 4:
                    return plateaCyL*cantEntradas;
                case 5:
                    return pullmanLateral*cantEntradas;
                case 6:
                    return cabecera*cantEntradas;
                default:
                    return null;
            }
        }else{
            alert ("ERROR AL INGRESAR LA CANTIDAD DE ENTRADAS!!! Por vavor ingrese un numero correcto")
            cantEntradas=0;
        }
    }
    return;
    
}
function listarPersonas(){
    let personas= "1- Nombre: "+prompt("Ingrese su nombre y apellido:");
    personas = personas +" DNI: "+ prompt ("Ingrese su DNI: ");
    if (cantEntradas==1){
        alert("Su entrada se ha generado con los siguientes datos: \n"+personas);
    }else{
        personas=personas+" - (entrada dominante)\n";
        for(let i=2;i<=cantEntradas;i++){
            personas= personas +i+"- Nombre: " + prompt("Ingrese nombre y apellido de la siguiente persona que lo acompañará: ");
            personas = personas +" DNI: "+ prompt ("Ingrese el DNI: ")+" \n";
        }
            
    }
    return personas;
}


alert("Bienvenido a EntradasAlan.com");
alert("Comencemos con el proceso de reserva de entradas");
let sector=elegirSector();
let cantEntradas=0;
let costoEntradas=calcularCosto();
let totalPagar=costoEntradas*iva+costoEntradas
let listaPersonas= listarPersonas();
alert ("Se han generado"+cantEntradas+" entradas con los siguientes datos: \n"+listaPersonas+"\n\n TOTAL A PAGAR: $"+totalPagar+"\n\n Por favor  contar con DNI en mano para ingresar el evento");
