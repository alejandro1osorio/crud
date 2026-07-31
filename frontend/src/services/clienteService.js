import axios from 'axios';

const API_URL = 'http://localhost:3000/api/clientes';

class ClienteService {

    async obtenerClientes() {

        const response = await axios.get(API_URL);

        return response.data;

    }

    async obtenerCliente(id) {

        const response = await axios.get(`${API_URL}/${id}`);

        return response.data;

    }

    async crearCliente(cliente) {

        const response = await axios.post(API_URL, cliente);

        return response.data;

    }

    async actualizarCliente(id, cliente) {

        const response = await axios.put(`${API_URL}/${id}`, cliente);

        return response.data;

    }

    async eliminarCliente(id) {

        const response = await axios.delete(`${API_URL}/${id}`);

        return response.data;

    }

}

export default new ClienteService();