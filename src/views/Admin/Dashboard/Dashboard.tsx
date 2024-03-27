import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth"
import { getAllShipments } from "./actions";
import { Shipment } from "../../../types";
import ShipmentList from "../../../components/ShipmentList/ShipmentList";

export default function Dashboard () {
    const [ shipments, setShipments ] = useState<Shipment[]>([])
    const { authState } = useAuth();
    const { loading } = authState;

    const loadShipments = async () => {
        const shipments: Shipment[] = await getAllShipments();
        setShipments(shipments);
    }

    useEffect(() => {
        if (!loading) {
            loadShipments();
        }
    }, [loading]);

    return (
        <div className='full-width content-height pad-all content-centered'>
            <ShipmentList isAdmin={true} shipments={shipments} onEdit={loadShipments}/>
        </div>  
    )
}