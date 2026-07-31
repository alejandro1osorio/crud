import db from '../config/db.js';

class CabezaFacturaRepository {
    async obtenerTodas() {

        const [rows] = await db.query(`
            SELECT
                cf.numero,
                cf.fecha,
                cf.total,
                cf.clientes_cliente,
                c.nombre_cliente
            FROM cabeza_factura cf
            INNER JOIN clientes c
                ON cf.clientes_cliente = c.cliente
            ORDER BY cf.numero ASC
        `);
        return rows;
    }

    async obtenerPorId(id) {
        const [rows] = await db.query(`
            SELECT
                cf.numero,
                cf.fecha,
                cf.total,
                cf.clientes_cliente,
                c.nombre_cliente
            FROM cabeza_factura cf
            INNER JOIN clientes c
                ON cf.clientes_cliente = c.cliente
            WHERE cf.numero = ?
        `, [id]);
        return rows[0];
    }

    async crear(factura) {
        const {
            fecha,
            total,
            clientes_cliente
        } = factura;

        const [result] = await db.query(`
            INSERT INTO cabeza_factura
            (
                fecha,
                total,
                clientes_cliente
            )
            VALUES (?, ?, ?)
        `, [
            fecha,
            total,
            clientes_cliente
        ]);
        return result.insertId;
    }

    async actualizar(id, factura) {
        const {
            fecha,
            total,
            clientes_cliente
        } = factura;

        await db.query(`
            UPDATE cabeza_factura
            SET
                fecha = ?,
                total = ?,
                clientes_cliente = ?
            WHERE numero = ?
        `, [
            fecha,
            total,
            clientes_cliente,
            id
        ]);
    }

    async eliminar(id) {
        await db.query(
            'DELETE FROM cabeza_factura WHERE numero = ?',
            [id]
        );
    }
}

export default new CabezaFacturaRepository();