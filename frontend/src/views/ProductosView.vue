<template>

    <div class="container">

        <h1>CRUD Productos</h1>

        <ProductoForm
            :producto="productoSeleccionado"
            @guardar="guardarProducto"
            @cancelar="cancelarEdicion"
        />

        <ProductoTable
            :productos="productos"
            @editar="editarProducto"
            @eliminar="eliminarProducto"
        />

    </div>

</template>

<script>

import ProductoForm from '../components/productos/ProductoForm.vue';
import ProductoTable from '../components/productos/ProductoTable.vue';
import productoService from '../services/productoService.js';

export default {

    name: 'ProductosView',

    components: {
        ProductoForm,
        ProductoTable
    },

    data() {

        return {

            productos: [],

            productoSeleccionado: null

        };

    },

    methods: {

        async cargarProductos() {

            try {

                this.productos = await productoService.obtenerProductos();

            } catch (error) {

                alert(error.message);

            }

        },

        async guardarProducto(producto) {

            try {

                if (producto.producto) {

                    await productoService.actualizarProducto(
                        producto.producto,
                        producto
                    );

                } else {

                    await productoService.crearProducto(producto);

                }

                this.productoSeleccionado = null;

                await this.cargarProductos();

            } catch (error) {

                alert(error.message);

            }

        },

        editarProducto(producto) {

            this.productoSeleccionado = { ...producto };

        },

        async eliminarProducto(producto) {

            const confirmar = confirm(
                `¿Desea eliminar el producto "${producto.nombre_producto}"?`
            );

            if (!confirmar) {

                return;

            }

            try {

                await productoService.eliminarProducto(producto.producto);

                await this.cargarProductos();

            } catch (error) {

                alert(error.message);

            }

        },

        cancelarEdicion() {

            this.productoSeleccionado = null;

        }

    },

    mounted() {

        this.cargarProductos();

    }

};

</script>