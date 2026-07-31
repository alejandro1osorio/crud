import axios from 'axios';

const API_URL = 'http://localhost:3000/api/detalle-factura';

class DetalleFacturaService {

    async obtenerDetalles() {

        const response = await axios.get(API_URL);

        return response.data;

    }

    async obtenerDetalle(numeroFactura, productoId) {

        const response = await axios.get(
            `${API_URL}/${numeroFactura}/${productoId}`
        );

        return response.data;

    }

    async crearDetalle(detalle) {

        const response = await axios.post(
            API_URL,
            detalle
        );

        return response.data;

    }

    async actualizarDetalle(numeroFactura, productoId, detalle) {

        const response = await axios.put(
            `${API_URL}/${numeroFactura}/${productoId}`,
            detalle
        );

        return response.data;

    }

    async eliminarDetalle(numeroFactura, productoId) {

        const response = await axios.delete(
            `${API_URL}/${numeroFactura}/${productoId}`
        );

        return response.data;

    }

}

export default new DetalleFacturaService();