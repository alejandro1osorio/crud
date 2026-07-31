<template>
    <table>
        <thead>
            <tr>

                <th>ID</th>
                <th>Nombre</th>
                <th>Valor</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody>
            <tr v-if="productos.length === 0">
                <td
                    colspan="4"
                    class="sin-registros"
                >
                    No hay productos registrados.
                </td>
            </tr>

            <tr
                v-for="producto in productos"
                :key="producto.producto"
            >
                <td>{{ producto.producto }}</td>
                <td>{{ producto.nombre_producto }}</td>
                <td>${{ Number(producto.valor).toFixed(2) }}</td>
                <td>

                    <button
                        class="btn-editar"
                        @click="$emit('editar', producto)"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-eliminar"
                        @click="$emit('eliminar', producto)"
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
    name: 'ProductoTable',
    props: {
        productos: {
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