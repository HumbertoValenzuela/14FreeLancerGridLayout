# 14FreeLancerGridLayout
14 Web FreeLancer. Grid. Fetch API. Consumir json. Mostrar Json en el DOM

```javascript
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





.hero .contenedor {
    display: grid;
/* No lo centra debido a que .contenedor debe tener height 100% */
    height: 100vh;
    /* lo baja al centro, pero hacia la izquierda */
    align-content: center;
    /* lo centra, pero lo deja arriba. los dos juntos lo centra en el medio de la pantalla */
    justify-content: center;
}
@media screen and (min-width:768px) {
    .servicios {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));    
        column-gap: 1rem;
    }
}
/* Portafolio */
.elemento {
    border-bottom: 1px solid #5b5b5b;
    margin-bottom: 3rem;
}
@media screen and (min-width: 768px) {
    .listado {
        display: grid;
        grid-template-columns: repeat(3, 1fr );
        column-gap: 2rem;
        /* declarar altura a los rows. max-content que crezca de acuerdo al tamaño mas grande   */
        grid-auto-rows: max-content;       
    }
    /* class elemento creado en JS.  */
    .elemento:nth-child(3) {
        grid-row-end: span 2;
    }
    .elemento {
        border: nonev;
    }
}

/* Footer */
.footer {
    background-image: url(../img/contacto.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--blanco);
    padding: 2rem 0;
}
.footer .widget {
    padding: 1rem;
}
/* quitar la última raya */
.elemento:last-of-type {
    border: none;
}
@media screen and (min-width: 768px) {
    .footer .contenedor {
        display: grid;
        grid-template-columns: repeat(2, 30%) auto;
    }
}
```
