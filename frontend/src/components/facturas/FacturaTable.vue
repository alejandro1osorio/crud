<template>

    <table>

        <thead>

            <tr>

                <th>Número</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Acciones</th>

            </tr>

        </thead>

        <tbody>

            <tr v-if="facturas.length === 0">

                <td
                    colspan="5"
                    class="sin-registros"
                >
                    No hay facturas registradas.
                </td>

            </tr>

            <tr
                v-for="factura in facturas"
                :key="factura.numero"
            >

                <td>{{ factura.numero }}</td>

                <td>{{ factura.fecha }}</td>

                <td>{{ factura.nombre_cliente }}</td>

                <td>${{ Number(factura.total).toFixed(2) }}</td>

                <td>

                    <button
                        class="btn-editar"
                        @click="$emit('editar', factura)"
                    >
                        Editar
                    </button>

                    <button
                        class="btn-eliminar"
                        @click="$emit('eliminar', factura)"
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

    name: 'FacturaTable',

    props: {

        facturas: {

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