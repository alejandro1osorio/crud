import cabezaFacturaRepository from '../repositories/cabezaFacturaRepository.js';

class CabezaFacturaService {

    async obtenerTodas() {
        return await cabezaFacturaRepository.obtenerTodas();
    }

    async obtenerPorId(id) {
        const factura = await cabezaFacturaRepository.obtenerPorId(id);

        if (!factura) {
            throw new Error('Factura no encontrada.');
        }

        return factura;
    }

    async crear(factura) {

        if (!factura.fecha) {
            throw new Error('La fecha es obligatoria.');
        }

        if (factura.total === undefined || factura.total === null || factura.total < 0) {
            throw new Error('El total debe ser mayor o igual a cero.');
        }

        if (!factura.clientes_cliente) {
            throw new Error('Debe seleccionar un cliente.');
        }

        return await cabezaFacturaRepository.crear(factura);
    }

    async actualizar(id, factura) {
        const facturaExistente = await cabezaFacturaRepository.obtenerPorId(id);

        if (!facturaExistente) {
            throw new Error('Factura no encontrada.');
        }

        if (!factura.fecha) {
            throw new Error('La fecha es obligatoria.');
        }

        if (factura.total === undefined || factura.total === null || factura.total < 0) {
            throw new Error('El total debe ser mayor o igual a cero.');
        }

        if (!factura.clientes_cliente) {
            throw new Error('Debe seleccionar un cliente.');
        }

        await cabezaFacturaRepository.actualizar(id, factura);
    }

    async eliminar(id) {
        const facturaExistente = await cabezaFacturaRepository.obtenerPorId(id);

        if (!facturaExistente) {
            throw new Error('Factura no encontrada.');
        }

        await cabezaFacturaRepository.eliminar(id);
    }
}

export default new CabezaFacturaService();