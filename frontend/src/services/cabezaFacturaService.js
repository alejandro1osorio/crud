import axios from 'axios';

const API_URL = 'http://localhost:3000/api/cabeza-factura';

class CabezaFacturaService {

    async obtenerFacturas() {

        const response = await axios.get(API_URL);

        return response.data;

    }

    async obtenerFactura(id) {

        const response = await axios.get(`${API_URL}/${id}`);

        return response.data;

    }

    async crearFactura(factura) {

        const response = await axios.post(API_URL, factura);

        return response.data;

    }

    async actualizarFactura(id, factura) {

        const response = await axios.put(`${API_URL}/${id}`, factura);

        return response.data;

    }

    async eliminarFactura(id) {

        const response = await axios.delete(`${API_URL}/${id}`);

        return response.data;

    }

}

export default new CabezaFacturaService();