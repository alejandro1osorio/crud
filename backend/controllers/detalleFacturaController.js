import detalleFacturaService from '../services/detalleFacturaService.js';

class DetalleFacturaController {

    async obtenerTodos(req, res) {
        try {
            const detalles = await detalleFacturaService.obtenerTodos();
            res.status(200).json(detalles);

        } catch (error) {
            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    async obtenerPorId(req, res) {
        try {
            const {
                numeroFactura,
                productoId
            } = req.params;
            const detalle = await detalleFacturaService.obtenerPorId(
                numeroFactura,
                productoId
            );
            res.status(200).json(detalle);
        } catch (error) {
            res.status(404).json({
                mensaje: error.message
            });
        }
    }

    async crear(req, res) {
        try {
            await detalleFacturaService.crear(req.body);

            res.status(201).json({
                mensaje: 'Detalle de factura creado correctamente.'
            });

        } catch (error) {

            res.status(400).json({
                mensaje: error.message
            });

        }
    }

    async actualizar(req, res) {
        try {


            const {
                numeroFactura,
                productoId
            } = req.params;

            await detalleFacturaService.actualizar(
                numeroFactura,
                productoId,
                req.body
            );

            res.status(200).json({
                mensaje: 'Detalle de factura actualizado correctamente.'
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    }

    async eliminar(req, res) {
        try {
            const {
                numeroFactura,
                productoId
            } = req.params;

            await detalleFacturaService.eliminar(
                numeroFactura,
                productoId
            );

            res.status(200).json({
                mensaje: 'Detalle de factura eliminado correctamente.'
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    }
}

export default new DetalleFacturaController();