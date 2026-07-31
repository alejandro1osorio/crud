import db from '../config/db.js';

class ProductoRepository {
    async obtenerTodos() {
        const [rows] = await db.query(
            'SELECT * FROM productos ORDER BY producto ASC'
        );
        return rows;
    }

    async obtenerPorId(id) {
        const [rows] = await db.query(
            'SELECT * FROM productos WHERE producto = ?',
            [id]
        );
        return rows[0];
    }

    async crear(producto) {
        const { nombre_producto, valor } = producto;

        const [result] = await db.query(
            `INSERT INTO productos
            (nombre_producto, valor)
            VALUES (?, ?)`,
            [nombre_producto, valor]
        );
        return result.insertId;
    }

    async actualizar(id, producto) {
        const { nombre_producto, valor } = producto;

        await db.query(
            `UPDATE productos
            SET nombre_producto = ?,
                valor = ?
            WHERE producto = ?`,
            [nombre_producto, valor, id]
        );
    }

    async eliminar(id) {
        await db.query(
            'DELETE FROM productos WHERE producto = ?',
            [id]
        );
    }
}

export default new ProductoRepository();