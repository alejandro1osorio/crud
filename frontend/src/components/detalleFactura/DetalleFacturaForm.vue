<template>

    <form @submit.prevent="guardar">

        <div class="form-group">

            <label>Factura</label>

            <select v-model="form.cabeza_factura_numero">

                <option value="">
                    Seleccione una factura
                </option>

                <option
                    v-for="factura in facturas"
                    :key="factura.numero"
                    :value="factura.numero"
                >
                    Factura #{{ factura.numero }}
                </option>

            </select>

        </div>

        <div class="form-group">

            <label>Producto</label>

            <select v-model="form.productos_producto">

                <option value="">
                    Seleccione un producto
                </option>

                <option
                    v-for="producto in productos"
                    :key="producto.producto"
                    :value="producto.producto"
                >
                    {{ producto.nombre_producto }}
                </option>

            </select>

        </div>

        <div class="form-group">

            <label>Cantidad</label>

            <input
                type="number"
                min="1"
                v-model="form.cantidad"
            >

        </div>

        <div class="form-group">

            <label>Valor</label>

            <input
                type="number"
                step="0.01"
                min="0"
                v-model="form.valor"
            >

        </div>

        <button
            type="submit"
            class="btn-guardar"
        >
            {{ editando ? 'Actualizar' : 'Guardar' }}
        </button>

        <button
            v-if="editando"
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
    name: 'DetalleFacturaForm',
    props: {

        detalle: {
            type: Object,
            default: null
        },

        facturas: {
            type: Array,
            default: () => []
        },

        productos: {
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
            editando: false,
            form: {
                cabeza_factura_numero: '',
                productos_producto: '',
                cantidad: 1,
                valor: 0
            }
        };
    },

    watch: {
        detalle: {
            immediate: true,
            handler(nuevoDetalle) {
                if (nuevoDetalle) {
                    this.editando = true;
                    this.form = {
                        ...nuevoDetalle
                    };

                } else {
                    this.limpiarFormulario();
                }
            }
        }
    },

    methods: {
        guardar() {
            if (!this.form.cabeza_factura_numero) {
                alert('Seleccione una factura.');
                return;
            }

            if (!this.form.productos_producto) {
                alert('Seleccione un producto.');
                return;
            }

            if (this.form.cantidad <= 0) {
                alert('La cantidad debe ser mayor que cero.');
                return;
            }

            if (this.form.valor < 0) {
                alert('El valor debe ser mayor o igual a cero.');
                return;
            }

            this.$emit('guardar', {
                ...this.form,
                cantidad: Number(this.form.cantidad),
                valor: Number(this.form.valor)
            });
        },

        cancelar() {
            this.limpiarFormulario();
            this.$emit('cancelar');
        },

        limpiarFormulario() {
            this.editando = false;
            this.form = {
                cabeza_factura_numero: '',
                productos_producto: '',
                cantidad: 1,
                valor: 0
            };
        }
    }
};

</script>