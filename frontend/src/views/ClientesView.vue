<template>
    <div class="container">

        <h1>CRUD Clientes</h1>

        <ClienteForm
            :cliente="clienteSeleccionado"
            @guardar="guardarCliente"
            @cancelar="cancelarEdicion"
        />

        <ClienteTable
            :clientes="clientes"
            @editar="editarCliente"
            @eliminar="eliminarCliente"
        />

    </div>
</template>

<script>
import ClienteForm from '../components/clientes/ClienteForm.vue';
import ClienteTable from '../components/clientes/ClienteTable.vue';
import clienteService from '../services/clienteService';

export default {

    name: 'App',

    components: {
        ClienteForm,
        ClienteTable
    },

    data() {
        return {

            clientes: [],

            clienteSeleccionado: null

        };
    },

    methods: {

        async cargarClientes() {

            try {

                this.clientes = await clienteService.obtenerClientes();

            } catch (error) {

                alert(error.message);

            }

        },

        async guardarCliente(cliente) {

            try {

                if (cliente.cliente) {

                    await clienteService.actualizarCliente(
                        cliente.cliente,
                        cliente
                    );

                } else {

                    await clienteService.crearCliente(cliente);

                }

                this.clienteSeleccionado = null;

                await this.cargarClientes();

            } catch (error) {

                alert(error.message);

            }

        },

        editarCliente(cliente) {

            this.clienteSeleccionado = { ...cliente };

        },

        async eliminarCliente(cliente) {

            const confirmar = confirm(
                `¿Desea eliminar el cliente "${cliente.nombre_cliente}"?`
            );

            if (!confirmar) return;

            try {

                await clienteService.eliminarCliente(cliente.cliente);

                await this.cargarClientes();

            } catch (error) {

                alert(error.message);

            }

        },

        cancelarEdicion() {

            this.clienteSeleccionado = null;

        }

    },

    mounted() {

        this.cargarClientes();

    }

};
</script>