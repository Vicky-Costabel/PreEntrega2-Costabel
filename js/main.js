function respuestas() {
      let respuestas = {
            ronda1: seleccion("Eleccion 1"),
            ronda2: seleccion("Eleccion 2"),
            ronda3: seleccion("Eleccion 3")
      };
      let grupoA = [];
      let grupoB = [];
      for (let ronda in respuestas) {
            if (respuestas.hasOwnProperty(ronda)) {
                  if (respuestas[ronda] === "a") {
                        grupoA.push(ronda);
                  } else if (respuestas[ronda] === "b") {
                        grupoB.push(ronda);
                  } else {
                        if (Math.random() > 0.5) {
                              grupoA.push(ronda);
                        } else {
                              grupoB.push(ronda);
                        }
                  }
             }
      }
      let mayor = grupoA.length > grupoB.length ? "A" : "B";
      alert(`El grupo Ganador es el ${mayor}`);
}
  
  function seleccion(ronda) {
      let opcion = prompt(`${ronda}. Elige entre: "A", "B", o "C"`).toLowerCase();
      if (opcion !== "a" && opcion !== "b" && opcion !== "c") {
            alert("Respuesta inválida");
            return seleccion(ronda);
      }
      return opcion;
}
  
respuestas();
