var vm = new Vue({
  el: '#app',
  data: {
    tareas: [{
        descripcion: 'Aprender Vue.js',
        pendiente: true,
        editando: false
      },
      {
        descripcion: 'Crear una API',
        pendiente: true,
        editando: true
      },
      {
        descripcion: 'Crear una aplicación',
        pendiente: false,
        editando: false
      }
    ]
  },
});