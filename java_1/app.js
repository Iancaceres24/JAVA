
let salir = "no" 
let sueldo = 0
let sueldo_total = 0
let empleado = ""
let paga_empleados = 0
let obra_social = "no"
function porcentaje(num,porc){
    return num * porc / 100 
}


alert("Lista de empleados y sueldos por jornada laboral")
do{
    let extra = 0
    let descuento = 0
    let nombre = prompt("Ingrese nombre del empleado: ")
    let horas = Number(prompt("Ingrese las horas trabajadas en la jornada: "))
    let sueldo_hora = Number(prompt("Ingrese cuanto gana por hora: "))
    do{
        obra_social = prompt("Tiene obra social(si/no): ").toLowerCase()}
    while(obra_social != "si" && obra_social != "no")
    sueldo = sueldo_hora * horas
    if(horas >=8 ){
        extra= porcentaje(sueldo,10)
    }
    if(obra_social == "si"){
        descuento = porcentaje(sueldo,5)}
        
    sueldo_total = sueldo + extra - descuento 
    empleado = empleado + "\n\nEl empleado "+ nombre + "\nTrabajo: "+horas +"hs"+"\tGana por hora: $"+sueldo_hora +"\n Gano por las horas trabajadas: $"+sueldo+ "\n Extra: $"+extra+"\tdescuento: $"+descuento+"\nGano en la jornada: $"+sueldo_total 
    paga_empleados = paga_empleados + sueldo_total
    alert(empleado)
    do{
        salir = prompt("¿Desea seguir cargando empleados?(si/no)").toLowerCase()}
    while(salir != "no" && salir != "si")
    
}while(salir != "no")

alert(empleado + "\n\nSe pago en total a lo empleados: $"+paga_empleados)