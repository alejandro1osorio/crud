import productoService from '../services/productoService.js';

class ProductoController {
    async obtenerTodos(req, res) {
        try {
            const productos = await productoService.obtenerTodos();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const producto = await productoService.obtenerPorId(id);

            res.status(200).json(producto);
        } catch (error) {
            res.status(404).json({
                mensaje: error.message
            });
        }
    }

    async crear(req, res) {
        try {
            const id = await productoService.crear(req.body);

            res.status(201).json({
                mensaje: 'Producto creado correctamente.',
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
            await productoService.actualizar(id, req.body);

            res.status(200).json({
                mensaje: 'Producto actualizado correctamente.'
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
            await productoService.eliminar(id);

            res.status(200).json({
                mensaje: 'Producto eliminado correctamente.'
            });
        } catch (error) {
            res.status(400).json({
                mensaje: error.message
            });
        }
    }
}

export default new ProductoController();