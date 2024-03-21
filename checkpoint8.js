function primerEjercicio() {
    const miLista = ["velma", "exploradora", "jane", "john", "harry"];
    for (let i = 0; i < miLista.length; i++) {
      console.log(miLista[i]);
    }
  }
  
  function segundoEjercicio() {
    const miLista = ["velma", "exploradora", "jane", "john", "harry"];
    let contador = 0;
    while (contador < miLista.length) {
      console.log(miLista[contador]);
      contador++;
    }
  }
  
  const tercerEjercicio = () => {
    return "Hola mundo";
  }
  
primerEjercicio();//velma exploradora jane...
segundoEjercicio();//velma exploradora jane...
console.log(tercerEjercicio());//Hola mundo
  