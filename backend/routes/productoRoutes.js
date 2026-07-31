import { Router } from 'express';
import productoController from '../controllers/productoController.js';

const router = Router();

router.get(
    '/',
    (req, res) => productoController.obtenerTodos(req, res)
);

router.get(
    '/:id',
    (req, res) => productoController.obtenerPorId(req, res)
);

router.post(
    '/',
    (req, res) => productoController.crear(req, res)
);

router.put(
    '/:id',
    (req, res) => productoController.actualizar(req, res)
);

router.delete(
    '/:id',
    (req, res) => productoController.eliminar(req, res)
);

export default router;