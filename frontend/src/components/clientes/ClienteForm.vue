<template>
    <form @submit.prevent="guardar">
        <div class="form-group">
            <label>Nombre</label>
            <input
                type="text"
                v-model="form.nombre_cliente"
                placeholder="Ingrese el nombre del cliente"
            >
        </div>

        <div class="form-group">
            <label>Dirección</label>
            <input
                type="text"
                v-model="form.direccion"
                placeholder="Ingrese la dirección"
            >
        </div>

        <button
            type="submit"
            class="btn-guardar"
        >
            {{ form.cliente ? 'Actualizar' : 'Guardar' }}
        </button>

        <button
            v-if="form.cliente"
            type="button"
            class="btn-cancelar"
            @click="cancelar"
        >
            Cancelar
        </button>

    </form>

</template>

<script>

export default {
    name: 'ClienteForm',
    props: {
        cliente: {
            type: Object,
            default: null
        }
    },
    emits: [
        'guardar',
        'cancelar'
    ],

    data() {
        return {
            form: {
                cliente: null,
                nombre_cliente: '',
                direccion: ''
            }
        };
    },

    watch: {
        cliente: {
            immediate: true,
            handler(nuevoCliente) {
                if (nuevoCliente) {
                    this.form = {
                        ...nuevoCliente
                    };
                } else {
                    this.limpiarFormulario();
                }
            }
        }
    },

    methods: {
        guardar() {
            if (this.form.nombre_cliente.trim() === '') {
                alert('Debe ingresar el nombre del cliente.');
                return;
            }

            if (this.form.direccion.trim() === '') {
                alert('Debe ingresar la dirección.');
                return;
            }

            this.$emit('guardar', {
                ...this.form
            });
            this.limpiarFormulario();
        },
        cancelar() {
            this.limpiarFormulario();
            this.$emit('cancelar');
        },
        limpiarFormulario() {
            this.form = {
                cliente: null,
                nombre_cliente: '',
                direccion: ''
            };
        }
    }
};

</script>