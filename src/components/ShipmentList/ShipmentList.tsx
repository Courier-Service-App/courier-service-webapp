import { Button, List, Skeleton } from 'antd';
import { Shipment } from '../../types';
import ViewShipment from '../ViewShipment/ViewShipment';
import { useState } from 'react';
import EditShipment from '../EditShipment/EditShipment';
import { editShipment } from '../../views/Admin/Dashboard/actions';

type ShipmentListProps = {
    shipments: Shipment[],
    isAdmin?: boolean,
    onEdit?: () => void
}

export default function ShipmentList({ shipments, isAdmin = false, onEdit = () => {} }: ShipmentListProps) {
    const [ shipment, setShipment ] = useState<Shipment | null>(null);
    const [ isViewShipment, setViewShipment ] = useState<boolean>(false);
    const [ isEditShipment, setEditShipment ] = useState<boolean>(false);

    const onViewShipment = (shipment: Shipment) => {
        setShipment(shipment);
        setViewShipment(true);
    }

    const onCloseViewShipment = () => {
        setShipment(null);
        setViewShipment(false);
    }

    const onEditShipment = (shipment: Shipment) => {
        setShipment(shipment);
        setEditShipment(true);
    }

    const onCloseEditShipment = () => {
        setShipment(null);
        setEditShipment(false);
    }

    const handleEditShipment = async (shipment: Shipment, shipmentId: string) => {
        const response = await editShipment(shipment, shipmentId);
        if (response) {
            onEdit();
            onCloseEditShipment();
        }
    }    

    return (
        <div>
            <List
                className='full-width content-height shipment-list'
                itemLayout="horizontal"
                dataSource={shipments}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <Button onClick={() => onViewShipment(item)} type='link'>View</Button>,
                            (isAdmin && <Button onClick={() => onEditShipment(item)} type='link'>Edit</Button>)
                        ]}
                    >
                        <Skeleton avatar title={false} loading={false}>
                            <List.Item.Meta
                                title={<p>{item.recipient_name}</p>}
                                description={item.details}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
            { shipment && <ViewShipment shipment={shipment} open={isViewShipment} onClose={onCloseViewShipment}/>}
            { shipment && isAdmin && <EditShipment shipment={shipment} open={isEditShipment} onEdit={handleEditShipment} onClose={onCloseEditShipment}/>}
        </div>
    )
}