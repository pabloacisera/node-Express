async function buscarEmpleados() {
    const response = await fetch('http://localhost:3200/buscar-empleados');
    const data = await response.json();
    mostrarResultados(data);
  }
  
  function mostrarResultados(resultados) {
    const cuerpoTabla = document.getElementById('resultadoCuerpo');
    cuerpoTabla.innerHTML = '';
  
    resultados.forEach(empleado => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${empleado.id}</td>
        <td>${empleado.nombre}</td>
        <td>${empleado.apellido}</td>
        <td>${empleado.anos_experiencia}</td>
      `;
      cuerpoTabla.appendChild(fila);
    });
  }
  