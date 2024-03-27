import { Shipment } from '../../types';
import { getApi } from '../../utils'

export const getShipment = async (trackingNumber: string): Promise<Shipment> => {
    return await getApi(`/shipments/${trackingNumber}`);
}