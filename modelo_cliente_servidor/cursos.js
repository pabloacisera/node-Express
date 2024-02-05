const infoCursos = {
  'programacion': [
    {
      'id': 1,
      'titulo': 'aprendiendo Python',
      'lenguaje': 'python',
      'vistas': 15000
    },
    {
      'id': 2,
      'titulo': 'aprendiendo Javascript',
      'lenguaje': 'Javascript',
      'vistas': 55000
    },
    {
      'id': 3,  // Corregido el id de 1 a 3
      'titulo': 'aprendiendo Typescript',
      'lenguaje': 'Typescript',
      'vistas': 25000
    }
  ],
  'matematicas': [
    {
      'id': 1,
      'titulo': 'Aprende trigonometria',
      'paginas': 22
    },
    {
      'id': 2,
      'titulo': 'Aprende aritmetica',
      'paginas': 122
    }
  ]
}

module.exports.infoCursos = infoCursos;
