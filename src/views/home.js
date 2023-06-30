import Swal from 'sweetalert2'

export const home = {
    template: 
    `
    <div class="container" id="datos">
        <div class="card bg-primary-subtle" id="card">
            <h5 class="card-header bg-success-subtle text-center">Card title</h5>
            <div class="d-flex mt-3 ms-4">
                <div class="card-body" id="div1">
                    <h5 class="card-title ms-4">Primer valor</h5>
                    <input type="text" class="form-control mt-3" maxlength='1' style="width: 100px; margin-left: 1em; font-size: 35px; text-align:center;" id="input1">
                    <button type="button" class="btn btn-outline-success mt-3 ms-5" id="boton1">Validar</button>
                </div>
                <div class="card-body" id="div2">
                    <h5 class="card-title ms-4">Segundo valor</h5>
                    <input type="text" class="form-control mt-3" maxlength='1' style="width: 100px; margin-left: 1em; font-size: 35px; text-align:center;" id="input2">
                    <button type="button" class="btn btn-outline-success mt-3 ms-5" id="boton2">Validar</button>
                </div>
                <div class="card-body" id="div3">
                    <h5 class="card-title ms-4">Tercer valor</h5>
                    <input type="text" class="form-control mt-3" maxlength='1' style="width: 100px; margin-left: 1em; font-size: 35px; text-align:center;" id="input3">
                    <button type="button" class="btn btn-outline-success mt-3 ms-5" id="boton3">Validar</button>
                </div>
                <div class="card-body" id="div4">
                    <h5 class="card-title ms-4">Cuarto valor</h5>
                    <input type="text" class="form-control mt-3" maxlength='1' style="width: 100px; margin-left: 1em; font-size: 35px; text-align:center;" id="input4">
                    <button type="button" class="btn btn-outline-success mt-3 ms-5" id="boton4">Validar</button>
                </div>
                <div class="card-body" id="div5">
                    <h5 class="card-title ms-4">Quinto valor</h5>
                    <input type="text" class="form-control mt-3" maxlength='1' style="width: 100px; margin-left: 1em; font-size: 35px; text-align:center;" id="input5">
                    <button type="button" class="btn btn-outline-success mt-3 ms-5" id="boton5">Validar</button>
                </div>
            </div>
        </div>
    </div>
    `,
    script: () => {
        

        document.querySelector('#boton1').addEventListener('click', (event) => {
            event.preventDefault()
            let target1 = document.querySelector('#input1').value
            if(target1 !== "⭐") {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'No es ese T.T',
                  })
                console.log("⭐");
            } else {
                Swal.fire({
                    title: "¡Bien hecho!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar...'
                  }).then(() => {
                    let card1 = 
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="./resources/diablo.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">DIABLO IV</h5>
                            <p class="card-text">Vale por 2 copias del diablo 4 (1 para ti y 1 para mí) para viciarla máximo</p>
                            <a href="https://files.fm/u/m68d9d7r5" class="btn btn-primary">Descargar vale</a>
                        </div>
                    </div>
                    `
                    document.querySelector('#div1').innerHTML = card1
                })  
            }
        })
    
        document.querySelector('#boton2').addEventListener('click', (event) => {
            event.preventDefault()
            let target2 = document.querySelector('#input2').value
            if(target2 !== ">") {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'No estarás haciendo trampas, ¿no?',
                  })
                console.log(">");
            } else {
                Swal.fire({
                    title: "¡Sigue así!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar...'
                  }).then(() => {
                    let card2 = 
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="./resources/crocs.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">ZAPATOS</h5>
                            <p class="card-text">Vale por 1 par de zapatos ya sean crocs, vans o el que quieras, ¡sin límite alguno de precio!</p>
                            <a href="#" class="btn btn-primary">Descargar vale</a>
                        </div>
                    </div>
                    `
                    document.querySelector('#div2').innerHTML = card2
                })  
            }
        })
    
        document.querySelector('#boton3').addEventListener('click', (event) => {
            event.preventDefault()
            let target3 = document.querySelector('#input3').value
            if(target3 !== "♥") {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'Ponlo bien que este te va a gustar 😋',
                })
                console.log("♥");
            } else {
                Swal.fire({
                    title: "¡Bien hecho!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar...'
                  }).then(() => {
                    let card3 = 
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="./resources/shushi.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">CENA</h5>
                            <p class="card-text">Vale por 1 cena en el restaurante degustación Koy Shunka(1 estrella Michelin)</p>
                            <a href="#" class="btn btn-primary">Descargar vale</a>
                        </div>
                    </div>
                    `
                    document.querySelector('#div3').innerHTML = card3
                })  
            }
        })

        document.querySelector('#boton4').addEventListener('click', (event) => {
            event.preventDefault()
            let target4 = document.querySelector('#input4').value
            if(target4 !== "♪") {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'Si vuelves a fallar te quedas si regalo friki🙄',
                  })
                console.log("♪");
            } else {
                Swal.fire({
                    title: "¡Bien hecho!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar...'
                  }).then(() => {
                    let card4 = 
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">NOCHE FRIKI</h5>
                            <p class="card-text">Vale 1 pase de batalla, 1 arma del Valorant y 5g de la que quieras</p>
                            <a href="#" class="btn btn-primary">Descargar vale</a>
                        </div>
                    </div>
                    `
                    document.querySelector('#div4').innerHTML = card4
                })  
            }
        })

        document.querySelector('#boton5').addEventListener('click', (event) => {
            event.preventDefault()
            let target5 = document.querySelector('#input5').value
            if(target5 !== "/") {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrecto',
                    text: 'No es ese T.T',
                  })
                console.log("/");
            } else {
                Swal.fire({
                    title: "¡Bien hecho!",
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Continuar...'
                  }).then(() => {
                    let card5 = 
                    `
                    <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">DIABLO IV</h5>
                            <p class="card-text">Vale por 2 copias del diablo 4 (1 para ti y 1 para mí)</p>
                            <a href="#" class="btn btn-primary">Descargar vale</a>
                        </div>
                    </div>
                    `
                    document.querySelector('#div5').innerHTML = card5
                })  
            }
        })
    }
}