import { ReactElement } from "react";

export type MenuItem = {
    key: string;
    label: string;
    icon?: ReactElement;
};

export type KeyValues = {
    [key: string]: any
};

export type User = {
    userId: string,
    email?: string,
}

export type LoginResponse = {
    token: string,
    role: string,
    message?: string
}

export type RegistrationProps = {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phone: string,
    password: string
}

export type Shipment = {
    shipment_id: string,
    sender_name: string,
    sender_address: string,
    recipient_name: string,
    recipient_address: string,
    details: string,
    status: string,
    tracking_number: string,
}

export type SaveShipment = {
    senderName: string,
    senderAddress: string,
    recipientName: string,
    recipientAddress: string,
    details: string,
    userId: string,
    status: string,
}

export type TokenData = {
    first_name: string,
    last_name: string,
    email: string,
    user_id: string,
    type: string,
}
