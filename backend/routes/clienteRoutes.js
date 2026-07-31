import { Router } from 'express';
import clienteController from '../controllers/clienteController.js';

const router = Router();

router.get('/', clienteController.obtenerTodos);

router.get('/:id', clienteController.obtenerPorId);

router.post('/', clienteController.insertar);

router.put('/:id', clienteController.actualizar);

router.delete('/:id', clienteController.eliminar);

export default router;