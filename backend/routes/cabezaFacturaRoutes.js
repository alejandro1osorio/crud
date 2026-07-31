import { Router } from 'express';
import cabezaFacturaController from '../controllers/cabezaFacturaController.js';

const router = Router();

router.get(
    '/',
    (req, res) => cabezaFacturaController.obtenerTodas(req, res)
);

router.get(
    '/:id',
    (req, res) => cabezaFacturaController.obtenerPorId(req, res)
);

router.post(
    '/',
    (req, res) => cabezaFacturaController.crear(req, res)
);

router.put(
    '/:id',
    (req, res) => cabezaFacturaController.actualizar(req, res)
);

router.delete(
    '/:id',
    (req, res) => cabezaFacturaController.eliminar(req, res)
);

export default router;