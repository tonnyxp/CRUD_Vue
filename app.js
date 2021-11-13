var vm = new Vue({
  el: '#app',
  methods: {
    agregarTarea: function() {
      this.tareas.push({
        descripcion: this.tarea,
        pendiente: true,
        editando: false
      });

      this.tarea = '';
    }
  },
  data: {
    tarea: '',
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