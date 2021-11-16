Vue.component('app-icon', {
  template: '<span :class="cssClasses" aria-hidden="true"></span>',
  props: ['img'],
  computed: {
    cssClasses: function () {
        return 'glyphicon glyphicon-'+this.img
    }
  }
});

Vue.component('app-task', {
  template: '#task-template',
  props: ['tarea', 'index', 'tareas'],
  methods: {
    estatus: function() {
      this.tarea.pendiente = !this.tarea.pendiente;
    },

    editar: function() {
      this.tareas.forEach(function(tarea) {
        tarea.editando = false;
      });

      this.borrador = this.tarea.descripcion;
      this.tarea.editando = true;
    },

    actualizar: function() {
      this.tarea.descripcion = this.borrador;
      this.tarea.editando = false;
    },

    descartar: function() {
      this.tarea.editando = false;
    },

    eliminar: function() {
      this.tareas.splice(this.index, 1);
    },
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

    eliminarCompletadas: function() {
      this.tareas = this.tareas.filter(function(tarea) {
        return tarea.pendiente;
      });
    }
  },
});