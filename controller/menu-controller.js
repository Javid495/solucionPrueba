/* funcion encaragada de manipular las opcines */

const initMenu = () => {
        document.querySelectorAll('opMenu').forEach((val,id)=>{
            val.addEventListener('click' ,(e) =>{
                const dato = e.dataset.opcion;
                console.log(dato);
                e.preventDefault();
                e.stopImmediatePropagation();
            })
        })
    }

export{
    initMenu
}


