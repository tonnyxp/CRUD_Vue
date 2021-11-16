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
  data: function () {
    return {
      editando: false,
      borrador: '',
    };
  },
  template: '#task-template',
  props: ['tarea', 'index', 'tareas'],
  methods: {
    estatus: function () {
      this.tarea.pendiente = !this.tarea.pendiente;
    },

    editar: function () {
      this.borrador = this.tarea.descripcion;
      this.editando = true;
    },

    actualizar: function () {
      this.tarea.descripcion = this.borrador;
      this.editando = false;
    },

    descartar: function () {
      this.editando = false;
    },

    eliminar: function () {
      this.tareas.splice(this.index, 1);
    },
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    tarea: '',
    tareas: [{
        descripcion: 'Aprender Vue.js',
        pendiente: true
      },
      {
        descripcion: 'Crear una API',
        pendiente: true
      },
      {
        descripcion: 'Crear una aplicación',
        pendiente: false
      }
    ]
  },
  methods: {
    agregarTarea: function () {
      this.tareas.push({
        descripcion: this.tarea,
        pendiente: true
      });

      this.tarea = '';
    },

    eliminarCompletadas: function () {
      this.tareas = this.tareas.filter(function(tarea) {
        return tarea.pendiente;
      });
    },
  },
});