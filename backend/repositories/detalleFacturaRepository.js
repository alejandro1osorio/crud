import db from '../config/db.js';

class DetalleFacturaRepository {

    async obtenerTodos() {

        const [rows] = await db.query(`
            SELECT
                df.cabeza_factura_numero,
                df.productos_producto,
                df.cantidad,
                df.valor,
                p.nombre_producto
            FROM detalle_factura df
            INNER JOIN productos p
                ON df.productos_producto = p.producto
            ORDER BY df.cabeza_factura_numero ASC,
                     df.productos_producto ASC
        `);

        return rows;

    }

    async obtenerPorId(numeroFactura, productoId) {

        const [rows] = await db.query(`
            SELECT
                df.cabeza_factura_numero,
                df.productos_producto,
                df.cantidad,
                df.valor,
                p.nombre_producto
            FROM detalle_factura df
            INNER JOIN productos p
                ON df.productos_producto = p.producto
            WHERE
                df.cabeza_factura_numero = ?
                AND df.productos_producto = ?
        `, [
            numeroFactura,
            productoId
        ]);

        return rows[0];

    }

    async crear(detalle) {

        const {
            cabeza_factura_numero,
            productos_producto,
            cantidad,
            valor
        } = detalle;

        await db.query(`
            INSERT INTO detalle_factura
            (
                cabeza_factura_numero,
                productos_producto,
                cantidad,
                valor
            )
            VALUES (?, ?, ?, ?)
        `, [
            cabeza_factura_numero,
            productos_producto,
            cantidad,
            valor
        ]);

    }

    async actualizar(numeroFactura, productoId, detalle) {

        const {
            cantidad,
            valor
        } = detalle;

        await db.query(`
            UPDATE detalle_factura
            SET
                cantidad = ?,
                valor = ?
            WHERE
                cabeza_factura_numero = ?
                AND productos_producto = ?
        `, [
            cantidad,
            valor,
            numeroFactura,
            productoId
        ]);

    }

    async eliminar(numeroFactura, productoId) {

        await db.query(`
            DELETE FROM detalle_factura
            WHERE
                cabeza_factura_numero = ?
                AND productos_producto = ?
        `, [
            numeroFactura,
            productoId
        ]);

    }

}

export default new DetalleFacturaRepository();