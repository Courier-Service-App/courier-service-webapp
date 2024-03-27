import { List, Skeleton } from 'antd';
import { Shipment } from '../../types';

type ShipmentListProps = {
    shipments: Shipment[]
}

export default function ShipmentList({ shipments }: ShipmentListProps) {
    return (
        <List
            className='full-width content-height shipment-list'
            itemLayout="horizontal"
            dataSource={shipments}
            renderItem={(item) => (
                <List.Item
                    actions={[<a key="list-loadmore-more">View</a>]}
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
    )
}