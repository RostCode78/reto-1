const id = document.getElementById.bind(document);
const query = document.querySelector.bind(document);
const qAll = document.querySelectorAll.bind(document);
const print = console.log;

let propiedades = {
   boton: query(".icon-redes"),
   botonMobile: query(".icon-redes-mobile"),
   modal: query(".modal-redes"),
   modalMobile: query(".modal-redes-mobile"),
   txtModal: query(".txt-modal"),
   redesModal: query(".redes-modal"),
   contador: 0,
}

let metodos = {

   activarBoton: () => {
      propiedades.boton.addEventListener('click', () => {

         if(propiedades.contador == 0){

            propiedades.modal.style.display = "flex";

            let mostrarRedes = () => {
               setTimeout(function(){ 
               propiedades.txtModal.style.display = "flex";
               propiedades.redesModal.style.display = "flex";
               }, 0);
            }
            mostrarRedes();

            propiedades.contador = 1;

         } else if (propiedades.contador == 1){

            propiedades.modal.style.display = "none";

            let quitarRedes = () => {
               setTimeout(function(){ 
               propiedades.txtModal.style.display = "none";
               propiedades.redesModal.style.display = "none";
               }, 0);
            }
            quitarRedes();

            propiedades.contador = 0;

         }
      });
   },

   activarBotonMobile: () => {
      propiedades.botonMobile.addEventListener("click", () => {

         if (propiedades.contador == 0) {
            propiedades.modalMobile.style.display = "flex";
            propiedades.botonMobile.style.backgroundColor = "#f1f1f1";
            propiedades.contador = 1;
         } else if (propiedades.contador == 1) {
            propiedades.modalMobile.style.display = "none";
            propiedades.botonMobile.style.backgroundColor = "#f1f1f100";
            propiedades.contador = 0;
         }
         
      });
   }

}

metodos.activarBoton();
metodos.activarBotonMobile();