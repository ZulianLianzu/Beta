let clientes =34

async function sumaUno(){
    let num = 10000
    while (true){
        clientes++
        num+200
        document.getElementById("tex").innerHTML=`Contamos con<br><strong> + ${clientes}</strong><br> de clinetes satisfechos con nuestro servicio de lavanderia`
        await new Promise(resolve=>setTimeout(resolve,num))
    }
}
sumaUno()
sumaUno()