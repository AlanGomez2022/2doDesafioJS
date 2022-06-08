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
            switch (lugar){
                case 1:
                    return "Platea Preferida";
                case 2:
                    return "Platea";
                case 3:
                    return "Super Pullman";
                case 4:
                    return "Platea C y L";
                case 5:
                    return "Pullman Lateral";
                case 6:
                    return "Cabecera";
                default:
                    return null;
            }
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
                case "Platea Preferida":
                    precioEntrada=plateaPreferida;
                    return plateaPreferida*cantEntradas;
                case "Platea":
                    precioEntrada=platea
                    return platea*cantEntradas;
                case "Super Pullman":
                    precioEntrada=superPulman
                    return superPulman*cantEntradas;
                case "Platea C y L":
                    precioEntrada=plateaCyL
                    return plateaCyL*cantEntradas;
                case "Pullman Lateral":
                    precioEntrada=pullmanLateral
                    return pullmanLateral*cantEntradas;
                case "Cabecera":
                    precioEntrada=cabecera
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
        personas= personas + "\n"+ precioEntrada+" +IVA\n"
        return personas; 
    }else{
        personas=personas+" - (entrada dominante)\n";
        personas= personas + precioEntrada+" +IVA\n\n"
        for(let i=2;i<=cantEntradas;i++){
            personas= personas +i+"- Nombre: " + prompt("Ingrese nombre y apellido de la siguiente persona que lo acompañará: ");
            personas = personas +" DNI: "+ prompt ("Ingrese el DNI: ")+" \n";
            personas= personas + precioEntrada+" +IVA\n\n"
        }
            
    }
    return personas;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

alert("Bienvenido a EntradasAlan.com");
alert("Comencemos con el proceso de reserva de entradas");
let sector=elegirSector()
let cantEntradas=0;
let precioEntrada=0;
let costoEntradas=calcularCosto();
let totalPagar=costoEntradas*iva+costoEntradas;
let listaPersonas= listarPersonas();
alert ("Se han generado "+cantEntradas+" entradas "+sector+"  con los siguientes datos: \n\n\n"+listaPersonas+"\n\n TOTAL A PAGAR: $"+totalPagar+"\n\n Por favor  contar con DNI en mano para ingresar el evento");
