import { Shipment } from '../../../types';
import { getApi } from '../../../utils';

type ShipmentResponse = {
    shipments: Shipment[]
}

export const getShipments = async (userId: string) => {
    try {
        const { shipments } = await getApi<ShipmentResponse>(`/shipments/user-shipments/${userId}`);
        return shipments;
    }
    catch (error: any) {
        console.log(error);
        throw error;
    }
}