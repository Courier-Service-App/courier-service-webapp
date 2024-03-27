import { message } from 'antd';
import { Shipment } from '../../../types';
import { postApi } from '../../../utils';

export const createShipment = async (data: Shipment) => {
    try {
        message.loading("Please wait...");
        await postApi('/shipments/create-shipment', data);
        message.destroy();
        message.success("Shipment successfully created");
        return true;
    }
    catch (error: any) {
        console.log(error);
        message.destroy();
        message.error("Error in creating shipment");
        return false
    }
}