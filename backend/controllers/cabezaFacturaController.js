import cabezaFacturaService from '../services/cabezaFacturaService.js';

class CabezaFacturaController {
    async obtenerTodas(req, res) {
        try {
            const facturas = await cabezaFacturaService.obtenerTodas();
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const factura = await cabezaFacturaService.obtenerPorId(id);
            res.status(200).json(factura);
        } catch (error) {
            res.status(404).json({
                mensaje: error.message
            });
        }
    }

    async crear(req, res) {
        try {
            const id = await cabezaFacturaService.crear(req.body);
            res.status(201).json({
                mensaje: 'Factura creada correctamente.',
                id
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    }

    async actualizar(req, res) {
        try {
            const { id } = req.params;
            await cabezaFacturaService.actualizar(id, req.body);
            res.status(200).json({
                mensaje: 'Factura actualizada correctamente.'
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    }

    async eliminar(req, res) {
        try {
            const { id } = req.params;
            await cabezaFacturaService.eliminar(id);
            res.status(200).json({
                mensaje: 'Factura eliminada correctamente.'
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }

    }

}

export default new CabezaFacturaController();