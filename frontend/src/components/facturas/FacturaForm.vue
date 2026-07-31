<template>

    <form @submit.prevent="guardar">

        <div class="form-group">

            <label>Fecha</label>

            <input
                type="date"
                v-model="form.fecha"
            >

        </div>

        <div class="form-group">

            <label>Total</label>

            <input
                type="number"
                step="0.01"
                min="0"
                v-model="form.total"
            >

        </div>

        <div class="form-group">

            <label>Cliente</label>

            <select v-model="form.clientes_cliente">

                <option value="">
                    Seleccione un cliente
                </option>

                <option
                    v-for="cliente in clientes"
                    :key="cliente.cliente"
                    :value="cliente.cliente"
                >
                    {{ cliente.nombre_cliente }}
                </option>

            </select>

        </div>

        <button
            type="submit"
            class="btn-guardar"
        >
            {{ form.numero ? 'Actualizar' : 'Guardar' }}
        </button>

        <button
            v-if="form.numero"
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

    name: 'FacturaForm',

    props: {

        factura: {
            type: Object,
            default: null
        },

        clientes: {
            type: Array,
            default: () => []
        }
    },

    emits: [
        'guardar',
        'cancelar'
    ],

    data() {

        return {

            form: {

                numero: null,
                fecha: '',
                total: '',
                clientes_cliente: ''

            }

        };

    },

    watch: {

        factura: {

            immediate: true,

            handler(nuevaFactura) {
                if (nuevaFactura) {
                    this.form = {
                        ...nuevaFactura
                    };
                } else {
                    this.limpiarFormulario();
                }
            }
        }
    },

    methods: {

        guardar() {
            if (!this.form.fecha) {
                alert('Debe seleccionar la fecha.');
                return;
            }

            if (
                this.form.total === '' ||
                Number(this.form.total) < 0
            ) {
                alert('Ingrese un total válido.');
                return;
            }

            if (!this.form.clientes_cliente) {
                alert('Debe seleccionar un cliente.');
                return;
            }

            this.$emit('guardar', {
                ...this.form,

                total: Number(this.form.total)
            });
            this.limpiarFormulario();
        },

        cancelar() {

            this.limpiarFormulario();
            this.$emit('cancelar');

        },

        limpiarFormulario() {

            this.form = {

                numero: null,
                fecha: '',
                total: '',
                clientes_cliente: ''

            };

        }

    }

};

</script>