import { Col, Modal } from 'antd';
import { Shipment } from '../../types';

type ViewShipmentProps = {
    shipment: Shipment,
    open: boolean,
    onClose: () => void
}

export default function ViewShipment({ shipment, open, onClose }: ViewShipmentProps) {
    return (
        <Modal
            open={open}
            onCancel={onClose}
            title="View Shipment"
            footer={null}
        >
            <Col>
                <div>Sender's name: {shipment.sender_name}</div>
                <div>Sender's address: {shipment.sender_address}</div>
                <div>Recipient name: {shipment.recipient_name}</div>
                <div>Recipient address: {shipment.recipient_address}</div>
                <div>Details: {shipment.details}</div>
                <div>Status: {shipment.status}</div>
            </Col>
        </Modal>
    )
}