import productoRepository from '../repositories/productoRepository.js';

class ProductoService {

    async obtenerTodos() {
        return await productoRepository.obtenerTodos();
    }

    async obtenerPorId(id) {
        const producto = await productoRepository.obtenerPorId(id);

        if (!producto) {
            throw new Error('Producto no encontrado.');
        }

        return producto;
    }

    async crear(producto) {
        if (!producto.nombre_producto || producto.nombre_producto.trim() === '') {
            throw new Error('El nombre del producto es obligatorio.');
        }

        if (producto.valor === undefined || producto.valor === null || producto.valor <= 0) {
            throw new Error('El valor del producto debe ser mayor que cero.');
        }

        return await productoRepository.crear(producto);
    }

    async actualizar(id, producto) {
        const productoExistente = await productoRepository.obtenerPorId(id);

        if (!productoExistente) {
            throw new Error('Producto no encontrado.');
        }

        if (!producto.nombre_producto || producto.nombre_producto.trim() === '') {
            throw new Error('El nombre del producto es obligatorio.');
        }

        if (producto.valor === undefined || producto.valor === null || producto.valor <= 0) {
            throw new Error('El valor del producto debe ser mayor que cero.');
        }

        await productoRepository.actualizar(id, producto);
    }

    async eliminar(id) {
        const productoExistente = await productoRepository.obtenerPorId(id);

        if (!productoExistente) {
            throw new Error('Producto no encontrado.');
        }

        await productoRepository.eliminar(id);
    }
}

export default new ProductoService();