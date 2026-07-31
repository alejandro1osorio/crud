<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-if="clientes.length === 0"
            >
                <td
                    colspan="4"
                    class="sin-registros"
                >
                    No hay clientes registrados.
                </td>
            </tr>

            <tr
                v-for="cliente in clientes"
                :key="cliente.cliente"
            >

                <td>{{ cliente.cliente }}</td>
                <td>{{ cliente.nombre_cliente }}</td>
                <td>{{ cliente.direccion }}</td>

                <td>
                    <button
                        class="btn-editar"
                        @click="$emit('editar', cliente)"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-eliminar"
                        @click="$emit('eliminar', cliente)"
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: 'ClienteTable',
    props: {
        clientes: {
            type: Array,
            required: true
        }
    },

    emits: [
        'editar',
        'eliminar'
    ]
};

</script>