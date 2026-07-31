import pool from '../config/db.js';

class ClienteRepository {
    async obtenerTodos() {
        const [rows] = await pool.query(`
            SELECT
                cliente,
                nombre_cliente,
                direccion
            FROM clientes
            ORDER BY cliente ASC
        `);
        return rows;
    }

    async obtenerPorId(cliente) {

        const [rows] = await pool.query(`
            SELECT
                cliente,
                nombre_cliente,
                direccion
            FROM clientes
            WHERE cliente = ?
        `, [cliente]);

        return rows[0];
    }

    async insertar(cliente) {

        const [resultado] = await pool.query(`
            INSERT INTO clientes
            (
                nombre_cliente,
                direccion
            )
            VALUES
            (
                ?,
                ?
            )
        `, [
            cliente.nombre_cliente,
            cliente.direccion
        ]);

        return resultado.insertId;
    }

    async actualizar(id, cliente) {

        const [resultado] = await pool.query(`
            UPDATE clientes
            SET
                nombre_cliente = ?,
                direccion = ?
            WHERE cliente = ?
        `, [
            cliente.nombre_cliente,
            cliente.direccion,
            id
        ]);

        return resultado.affectedRows;
    }

    async eliminar(id) {

        const [resultado] = await pool.query(`
            DELETE FROM clientes
            WHERE cliente = ?
        `, [id]);

        return resultado.affectedRows;
    }

}

export default new ClienteRepository();