import detalleFacturaRepository from '../repositories/detalleFacturaRepository.js';

class DetalleFacturaService {

    async obtenerTodos() {
        return await detalleFacturaRepository.obtenerTodos();
    }

    async obtenerPorId(numeroFactura, productoId) {

        const detalle = await detalleFacturaRepository.obtenerPorId(
            numeroFactura,
            productoId
        );

        if (!detalle) {
            throw new Error('Detalle de factura no encontrado.');
        }

        return detalle;
    }

    async crear(detalle) {

        if (!detalle.cabeza_factura_numero) {
            throw new Error('Debe seleccionar una factura.');
        }

        if (!detalle.productos_producto) {
            throw new Error('Debe seleccionar un producto.');
        }

        if (
            detalle.cantidad === undefined ||
            detalle.cantidad === null ||
            detalle.cantidad <= 0
        ) {

            throw new Error('La cantidad debe ser mayor que cero.');

        }

        if (
            detalle.valor === undefined ||
            detalle.valor === null ||
            detalle.valor < 0
        ) {

            throw new Error('El valor debe ser mayor o igual a cero.');

        }

        await detalleFacturaRepository.crear(detalle);

    }

    async actualizar(numeroFactura, productoId, detalle) {

        const detalleExistente = await detalleFacturaRepository.obtenerPorId(
            numeroFactura,
            productoId
        );

        if (!detalleExistente) {
            throw new Error('Detalle de factura no encontrado.');
        }

        if (
            detalle.cantidad === undefined ||
            detalle.cantidad === null ||
            detalle.cantidad <= 0
        ) {

            throw new Error('La cantidad debe ser mayor que cero.');

        }

        if (
            detalle.valor === undefined ||
            detalle.valor === null ||
            detalle.valor < 0
        ) {

            throw new Error('El valor debe ser mayor o igual a cero.');

        }

        await detalleFacturaRepository.actualizar(
            numeroFactura,
            productoId,
            detalle
        );

    }

    async eliminar(numeroFactura, productoId) {

        const detalleExistente = await detalleFacturaRepository.obtenerPorId(
            numeroFactura,
            productoId
        );

        if (!detalleExistente) {
            throw new Error('Detalle de factura no encontrado.');
        }

        await detalleFacturaRepository.eliminar(
            numeroFactura,
            productoId
        );

    }

}

export default new DetalleFacturaService();