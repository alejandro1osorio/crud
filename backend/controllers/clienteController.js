import clienteService from '../services/clienteService.js';

class ClienteController {
    async obtenerTodos(req, res) {
        try {
            const clientes = await clienteService.obtenerTodos();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const cliente = await clienteService.obtenerPorId(id);

            if (!cliente) {
                return res.status(404).json({
                    mensaje: 'Cliente no encontrado.'
                });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({
                mensaje: error.message
            });
        }
    }

    async insertar(req, res) {
        try {
            const id = await clienteService.insertar(req.body);
            res.status(201).json({
                mensaje: 'Cliente registrado correctamente.',
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
            await clienteService.actualizar(id, req.body);

            res.status(200).json({
                mensaje: 'Cliente actualizado correctamente.'
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
            await clienteService.eliminar(id);

            res.status(200).json({
                mensaje: 'Cliente eliminado correctamente.'
            });
        } catch (error) {


            res.status(400).json({
                mensaje: error.message
            });
        }
    }

}

export default new ClienteController();