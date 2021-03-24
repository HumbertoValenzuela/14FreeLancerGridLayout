// DOMContentLoaded document Ready
document.addEventListener('DOMContentLoaded', () => {
    // alert('Funciona');
    cargarPortafolio();
});

function cargarPortafolio() {
    // alert('Hola desde la funcion');
    // Fetch API. Función de JS 
    fetch('datos.json')
    // abre el archivo, nos trae una respuesta
    .then((respuesta) => {
        // console.log(respuesta);
// al ver el log se ve __proto-json. es el tipo de funcion aplicada para la respuesta
        return respuesta.json();
    })
    // aquí se puede acceder a los datos
    .then((datos) => {
        // indica el portafolio:array(8). se a creado la conexión
        // console.log(datos);
        let html='';
        // acceso a cada elemento
        // console.log(datos.portafolio);
        datos.portafolio.forEach( portafolio => {
            // recorre y muestra cada uno de los elementos y el contenido
            // console.log(portafolio); 
            // Crear el Template
            // Template o String Literal  
            html += `
                <div class="elemento">
                    <img src="img/${portafolio.id}.jpg">
                    <div class="contenido">
                        <h3>${portafolio.nombre}</h3>
                        <p>${portafolio.desc}</p>
                    </div>
                </div>
            `;
        } );
// Despues de crear el template , inyectar el HTML 
// permite seleccionar elemento. muestra los datos json en pantalla  
        document.querySelector('#listado').innerHTML = html;
    })

}