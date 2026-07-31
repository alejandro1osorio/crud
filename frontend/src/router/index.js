import { createRouter, createWebHistory } from 'vue-router';

import ClientesView from '../views/ClientesView.vue';
import ProductosView from '../views/ProductosView.vue';
import FacturasView from '../views/FacturasView.vue';
import DetalleFacturaView from '../views/DetalleFacturaView.vue';

const routes = [
    {
        path: '/',
        redirect: '/clientes'
    },
    {
        path: '/clientes',
        name: 'Clientes',
        component: ClientesView
    },
    {
        path: '/productos',
        name: 'Productos',
        component: ProductosView
    },
    {
        path: '/facturas',
        name: 'Facturas',
        component: FacturasView
    },
    {
        path: '/detalle-factura',
        name: 'DetalleFactura',
        component: DetalleFacturaView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;