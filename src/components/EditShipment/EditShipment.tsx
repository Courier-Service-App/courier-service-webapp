import { Button, Form, Input, Modal, Select } from 'antd';
import { Shipment } from '../../types';
import { SHIPMENT_STATUS } from '../../constants';

type ViewShipmentProps = {
    shipment: Shipment,
    open: boolean,
    onClose: () => void,
    onEdit: (shipment: Shipment, shipmentId: string) => void
}

export default function EditShipment({ shipment, open, onClose, onEdit }: ViewShipmentProps) {
    const [form] = Form.useForm();

    const handleEdit = async (data: Shipment) => {
        await onEdit(data, shipment.shipment_id);
    };

    return (
        <Modal
            open={open}
            onCancel={onClose}
            title="Edit Shipment"
            footer={null}
        >
            <Form form={form} onFinish={handleEdit} name="validateOnly" layout="vertical" autoComplete="off" initialValues={shipment}
            >
                <Form.Item name="sender_name" label="Sender's name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="sender_address" label="Sender's address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="recipient_name" label="Recipient name" rules={[{ required: true }]}>
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="recipient_address" label="Recipient address" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="details" label="Details" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                    <Select>
                        { Object.keys(SHIPMENT_STATUS).map((option: string) => (
                            <Select.Option value={option}>{option}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button className='full-width' type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}