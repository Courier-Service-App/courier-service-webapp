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
    recipient_name: string,
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
