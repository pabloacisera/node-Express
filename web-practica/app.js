function buscarUsuarios() {
  const searchInput = document.getElementById('searchInput');
  const resultadosDiv = document.getElementById('resultados');

  // Obtener el valor de la búsqueda
  const busqueda = searchInput.value;

  // Hacer la solicitud al servidor
  fetch(`http://localhost:3000/buscar?query=${busqueda}`)
      .then(response => response.json())
      .then(data => {
          // Mostrar los resultados en el div de resultados
          resultadosDiv.innerHTML = `<p>Cantidad de usuarios: ${data.cantidad}</p>
                                     <p>Nombres de usuarios: ${data.nombres.join(', ')}</p>`;
      })
      .catch(error => console.error('Error:', error));
}
