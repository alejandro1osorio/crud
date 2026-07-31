import clienteRepository from '../repositories/clienteRepository.js';

class ClienteService {

    async obtenerTodos() {
        return await clienteRepository.obtenerTodos();
    }

    async obtenerPorId(id) {
        return await clienteRepository.obtenerPorId(id);
    }

    async insertar(datos) {

        const { nombre_cliente, direccion } = datos;

        if (!nombre_cliente || nombre_cliente.trim() === '') {
            throw new Error('El nombre del cliente es obligatorio.');
        }

        if (!direccion || direccion.trim() === '') {
            throw new Error('La dirección es obligatoria.');
        }

        const cliente = {
            nombre_cliente: nombre_cliente.trim(),
            direccion: direccion.trim()
        };

        return await clienteRepository.insertar(cliente);
    }

    async actualizar(id, datos) {

        const { nombre_cliente, direccion } = datos;

        if (!nombre_cliente || nombre_cliente.trim() === '') {
            throw new Error('El nombre del cliente es obligatorio.');
        }

        if (!direccion || direccion.trim() === '') {
            throw new Error('La dirección es obligatoria.');
        }

        const existe = await clienteRepository.obtenerPorId(id);

        if (!existe) {
            throw new Error('El cliente no existe.');
        }

        const cliente = {
            nombre_cliente: nombre_cliente.trim(),
            direccion: direccion.trim()
        };

        return await clienteRepository.actualizar(id, cliente);
    }

    async eliminar(id) {

        const existe = await clienteRepository.obtenerPorId(id);

        if (!existe) {
            throw new Error('El cliente no existe.');
        }

        return await clienteRepository.eliminar(id);
    }

}

export default new ClienteService();