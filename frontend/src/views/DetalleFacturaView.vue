<template>

    <div class="container">

        <h1>CRUD Detalle Factura</h1>

        <DetalleFacturaForm
            :detalle="detalleSeleccionado"
            :facturas="facturas"
            :productos="productos"
            @guardar="guardarDetalle"
            @cancelar="cancelarEdicion"
        />

        <DetalleFacturaTable
            :detalles="detalles"
            @editar="editarDetalle"
            @eliminar="eliminarDetalle"
        />

    </div>

</template>

<script>

import DetalleFacturaForm from '../components/detalleFactura/DetalleFacturaForm.vue';
import DetalleFacturaTable from '../components/detalleFactura/DetalleFacturaTable.vue';

import detalleFacturaService from '../services/detalleFacturaService.js';
import cabezaFacturaService from '../services/cabezaFacturaService.js';
import productoService from '../services/productoService.js';

export default {

    name: 'DetalleFacturaView',

    components: {

        DetalleFacturaForm,
        DetalleFacturaTable

    },

    data() {

        return {

            detalles: [],

            facturas: [],

            productos: [],

            detalleSeleccionado: null

        };

    },

    methods: {

        async cargarDetalles() {

            try {

                this.detalles = await detalleFacturaService.obtenerDetalles();

            } catch (error) {

                alert(error.message);

            }

        },

        async cargarFacturas() {

            try {

                this.facturas = await cabezaFacturaService.obtenerFacturas();

            } catch (error) {

                alert(error.message);

            }

        },

        async cargarProductos() {

            try {

                this.productos = await productoService.obtenerProductos();

            } catch (error) {

                alert(error.message);

            }

        },

        async guardarDetalle(detalle) {

            try {

                if (this.detalleSeleccionado) {

                    await detalleFacturaService.actualizarDetalle(
                        this.detalleSeleccionado.cabeza_factura_numero,
                        this.detalleSeleccionado.productos_producto,
                        detalle
                    );

                } else {

                    await detalleFacturaService.crearDetalle(detalle);

                }

                this.detalleSeleccionado = null;

                await this.cargarDetalles();

            } catch (error) {

                alert(error.message);

            }

        },

        editarDetalle(detalle) {

            this.detalleSeleccionado = {

                ...detalle

            };

        },

        async eliminarDetalle(detalle) {

            const confirmar = confirm(
                '¿Desea eliminar este detalle de factura?'
            );

            if (!confirmar) {

                return;

            }

            try {

                await detalleFacturaService.eliminarDetalle(
                    detalle.cabeza_factura_numero,
                    detalle.productos_producto
                );

                await this.cargarDetalles();

            } catch (error) {

                alert(error.message);

            }

        },

        cancelarEdicion() {

            this.detalleSeleccionado = null;

        }

    },

    async mounted() {

        await this.cargarFacturas();

        await this.cargarProductos();

        await this.cargarDetalles();

    }

};

</script>