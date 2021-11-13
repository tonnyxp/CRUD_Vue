Vue.component('app-icon', {
  template: '<span :class="cssClasses" aria-hidden="true"></span>',
  props: ['img'],
  computed: {
    cssClasses: function () {
        return 'glyphicon glyphicon-'+this.img
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    borrador: '',
    tarea: '',
    tareas: [{
        descripcion: 'Aprender Vue.js',
        pendiente: true,
        editando: false
      },
      {
        descripcion: 'Crear una API',
        pendiente: true,
        editando: false
      },
      {
        descripcion: 'Crear una aplicación',
        pendiente: false,
        editando: false
      }
    ]
  },
  methods: {
    agregarTarea: function() {
      this.tareas.push({
        descripcion: this.tarea,
        pendiente: true,
        editando: false
      });

      this.tarea = '';
    },

    estatusTarea: function(tarea) {
      tarea.pendiente = !tarea.pendiente;
    },

    editarTarea: function(tarea) {
      this.tareas.forEach(function(tarea) {
        tarea.editando = false;
      });

      this.borrador = tarea.descripcion;
      tarea.editando = true;
    },

    actualizarTarea: function(tarea) {
      tarea.descripcion = this.borrador;
      tarea.editando = false;
    },

    descartarTarea: function(tarea) {
      tarea.editando = false;
    },

    eliminarTarea: function(index) {
      this.tareas.splice(index, 1);
    },

    eliminarCompletadas: function() {
      this.tareas = this.tareas.filter(function(tarea) {
        return tarea.pendiente;
      });
    }
  },
});