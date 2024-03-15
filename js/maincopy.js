let i = 1;

function agregarTareas (){
      tarea = prompt (`Ingrese la tarea.`);
      if (tarea !== null && tarea !== " "){
            finalizarTarea();   
      } else if (tarea === "ESC" || tarea === "esc"){
            alert (`Finalizando proceso.`)
      }
}

function finalizarTarea () {
      alert (`La tarea Nº ${i} actual es: ${tarea}.`);
      let finalizar = prompt (`¿La tarea Nº ${i} finalizó? (Responder 'Y' o 'N')`);
      if (finalizar === "Y" || finalizar === "y"){
            masTarea();
      } else if(finalizar === "N" || finalizar === "n" || finalizar === null || finalizar === " "){
            alert (`La tarea ${i} sigue sin finalizar.`);
            finalizarTarea()
      } else { 
            alert (`Respuesta Invalida. Finalizando proceso`)
      }
}

function masTarea() {
      let masTareas = prompt (`¿Tiene mas tareas? (Responder 'Y' o 'N')`);
      if (masTareas === "Y" || masTareas === "y"){
                  i++;
                  agregarTareas();
      } else if (masTareas === "N" || masTareas === "n"){
            alert (`Se realizaron ${i} tareas en total.`);
      } else {
            alert (`Respuesta invalida`);
            masTarea();
      }
}

agregarTareas();