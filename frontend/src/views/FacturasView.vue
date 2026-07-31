<template>

    <div class="container">

        <h1>CRUD Facturas</h1>

        <FacturaForm
            :factura="facturaSeleccionada"
            :clientes="clientes"
            @guardar="guardarFactura"
            @cancelar="cancelarEdicion"
        />

        <FacturaTable
            :facturas="facturas"
            @editar="editarFactura"
            @eliminar="eliminarFactura"
        />

    </div>

</template>

<script>

import FacturaForm from '../components/facturas/FacturaForm.vue';
import FacturaTable from '../components/facturas/FacturaTable.vue';

import cabezaFacturaService from '../services/cabezaFacturaService.js';
import clienteService from '../services/clienteService.js';

export default {

    name: 'FacturasView',

    components: {

        FacturaForm,
        FacturaTable

    },

    data() {

        return {

            facturas: [],

            clientes: [],

            facturaSeleccionada: null

        };

    },

    methods: {

        async cargarFacturas() {

            try {

                this.facturas = await cabezaFacturaService.obtenerFacturas();

            } catch (error) {

                alert(error.message);

            }

        },

        async cargarClientes() {

            try {

                this.clientes = await clienteService.obtenerClientes();

            } catch (error) {

                alert(error.message);

            }

        },

        async guardarFactura(factura) {

            try {

                if (factura.numero) {

                    await cabezaFacturaService.actualizarFactura(
                        factura.numero,
                        factura
                    );

                } else {

                    await cabezaFacturaService.crearFactura(factura);

                }

                this.facturaSeleccionada = null;

                await this.cargarFacturas();

            } catch (error) {

                alert(error.message);

            }

        },

        editarFactura(factura) {

            this.facturaSeleccionada = {

                ...factura

            };

        },

        async eliminarFactura(factura) {

            const confirmar = confirm(
                `¿Desea eliminar la factura #${factura.numero}?`
            );

            if (!confirmar) {

                return;

            }

            try {

                await cabezaFacturaService.eliminarFactura(
                    factura.numero
                );

                await this.cargarFacturas();

            } catch (error) {

                alert(error.message);

            }

        },

        cancelarEdicion() {

            this.facturaSeleccionada = null;

        }

    },

    async mounted() {

        await this.cargarClientes();

        await this.cargarFacturas();

    }

};

</script>