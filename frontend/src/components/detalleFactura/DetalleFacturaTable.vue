<template>

    <table>

        <thead>

            <tr>

                <th>Factura</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Valor</th>
                <th>Acciones</th>

            </tr>

        </thead>

        <tbody>

            <tr v-if="detalles.length === 0">

                <td
                    colspan="5"
                    class="sin-registros"
                >
                    No hay detalles registrados.
                </td>

            </tr>

            <tr
                v-for="detalle in detalles"
                :key="`${detalle.cabeza_factura_numero}-${detalle.productos_producto}`"
            >

                <td>

                    {{ detalle.cabeza_factura_numero }}

                </td>

                <td>

                    {{ detalle.nombre_producto }}

                </td>

                <td>

                    {{ detalle.cantidad }}

                </td>

                <td>

                    ${{ Number(detalle.valor).toFixed(2) }}

                </td>

                <td>

                    <button
                        class="btn-editar"
                        @click="$emit('editar', detalle)"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-eliminar"
                        @click="$emit('eliminar', detalle)"
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

    name: 'DetalleFacturaTable',

    props: {
        detalles: {
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