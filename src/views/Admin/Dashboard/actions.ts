import { Shipment } from '../../../types';
import { getApi, putApi } from '../../../utils';

type ShipmentResponse = {
    shipments: Shipment[]
}

export const getAllShipments = async () => {
    try {
        const { shipments } = await getApi<ShipmentResponse>(`/shipments/all-shipments`);
        return shipments;
    }
    catch (error: any) {
        console.log(error);
        throw error;
    }
}

export const editShipment = async (shipment: Shipment, shipmentId: string) => {
    try {
        return await putApi<ShipmentResponse>(`/shipments/${shipmentId}`, shipment);
    }
    catch (error: any) {
        console.log(error);
        return error;
    }
}