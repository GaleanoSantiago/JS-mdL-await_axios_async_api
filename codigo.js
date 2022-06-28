
//Nota: await no trabaja con then. por eso el uso de try y catch
const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados");
try{
    resultado = await axios("informacion.txt");
    console.log(resultado.data);
    aprobados.innerHTML = resultado.data.aprobados;
    desaprobados.innerHTML = resultado.data.desaprobados;

}catch(e){
    aprobados.textContent = "La API falló";
    desaprobados.textContent = "La API falló";
}
}

document.querySelector("#getInfo").addEventListener("click",getInfo);