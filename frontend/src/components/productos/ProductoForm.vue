<template>
    <form @submit.prevent="guardar">

        <div class="form-group">
            <label>Nombre</label>
            <input
                type="text"
                v-model="form.nombre_producto"
                placeholder="Ingrese el nombre del producto"
            >
        </div>

        <div class="form-group">

            <label>Valor</label>

            <input
                type="number"
                step="0.01"
                min="0"
                v-model="form.valor"
                placeholder="Ingrese el valor del producto"
            >

        </div>

        <button
            type="submit"
            class="btn-guardar"
        >
            {{ form.producto ? 'Actualizar' : 'Guardar' }}
        </button>

        <button
            v-if="form.producto"
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
    name: 'ProductoForm',
    props: {
        producto: {
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
                producto: null,
                nombre_producto: '',
                valor: ''
            }
        };
    },
    watch: {
        producto: {
            immediate: true,
            handler(nuevoProducto) {
                if (nuevoProducto) {
                    this.form = {
                        ...nuevoProducto
                    };
                } else {
                    this.limpiarFormulario();
                }
            }
        }
    },
    methods: {
        guardar() {
            if (this.form.nombre_producto.trim() === '') {
                alert('Debe ingresar el nombre del producto.');
                return;
            }
            if (
                this.form.valor === '' ||
                Number(this.form.valor) <= 0
            ) {

                alert('Debe ingresar un valor mayor que cero.');
                return;
            }
            this.$emit('guardar', {
                ...this.form,
                valor: Number(this.form.valor)
            });
            this.limpiarFormulario();
        },
        cancelar() {
            this.limpiarFormulario();
            this.$emit('cancelar');
        },
        limpiarFormulario() {
            this.form = {
                producto: null,
                nombre_producto: '',
                valor: ''
            };
        }
    }
};
</script>