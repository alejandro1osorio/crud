import axios from 'axios';

const API_URL = 'http://localhost:3000/api/productos';

class ProductoService {

    async obtenerProductos() {

        const response = await axios.get(API_URL);

        return response.data;

    }

    async obtenerProducto(id) {

        const response = await axios.get(`${API_URL}/${id}`);

        return response.data;

    }

    async crearProducto(producto) {

        const response = await axios.post(API_URL, producto);

        return response.data;

    }

    async actualizarProducto(id, producto) {

        const response = await axios.put(`${API_URL}/${id}`, producto);

        return response.data;

    }

    async eliminarProducto(id) {

        const response = await axios.delete(`${API_URL}/${id}`);

        return response.data;

    }

}

export default new ProductoService();