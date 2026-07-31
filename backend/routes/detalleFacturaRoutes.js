import { Router } from 'express';
import detalleFacturaController from '../controllers/detalleFacturaController.js';

const router = Router();

router.get(
    '/',
    (req, res) => detalleFacturaController.obtenerTodos(req, res)
);

router.get(
    '/:numeroFactura/:productoId',
    (req, res) => detalleFacturaController.obtenerPorId(req, res)
);

router.post(
    '/',
    (req, res) => detalleFacturaController.crear(req, res)
);

router.put(
    '/:numeroFactura/:productoId',
    (req, res) => detalleFacturaController.actualizar(req, res)
);

router.delete(
    '/:numeroFactura/:productoId',
    (req, res) => detalleFacturaController.eliminar(req, res)
);

export default router;