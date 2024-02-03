const baseDatos = [
    {
      nombre: 'pablo',
      apellido: 'cisera',
    },
    {
      nombre: 'pablo',
      apellido: 'galarza'
    }
  ];
  
  function buscar(nombre, apellido) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let coincidencias = [];
        for (let i = 0; i < baseDatos.length; i++) {
          if (baseDatos[i].nombre === nombre && baseDatos[i].apellido === apellido) {
            coincidencias.push(baseDatos[i]);
          }
        }
  
        if (coincidencias.length > 0) {
          resolve('Buscando paciente. Aguarde por favor...');
        } else {
          reject('No se ha encontrado pacientes ingresados con ese nombre y apellido...');
        }
      }, 500);
    });
  }
  
  function devolverBusqueda() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let coincidencias = baseDatos;
        if (coincidencias.length > 0) {
          resolve(`Se ha encontrado coincidencias:<br>${JSON.stringify(coincidencias)}`);
        } else {
          reject('No se han encontrado coincidencias.');
        }
      }, 3500);
    });
  }
  
  buscar('pablo', 'galarza')
    .then((mensaje) => {
      console.log(mensaje);
      return devolverBusqueda();
    })
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.log(error);
    });
  


