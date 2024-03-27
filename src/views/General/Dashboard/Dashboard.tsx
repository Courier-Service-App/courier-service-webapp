import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth"
import { getShipments } from "./actions";
import { Shipment } from "../../../types";
import ShipmentList from "../../../components/ShipmentList/ShipmentList";

export default function Dashboard () {
    const [ shipments, setShipments ] = useState<Shipment[]>([])
    const { authState } = useAuth();
    const { user, loading } = authState;

    const loadShipments = async () => {
        const shipments: Shipment[] = await getShipments(user.user_id);
        setShipments(shipments);
    }

    useEffect(() => {
        if (!loading) {
            loadShipments();
        }
    }, [loading]);

    return (
        <div className='full-width content-height pad-all content-centered'>
            <ShipmentList shipments={shipments}/>
        </div>  
    )
}