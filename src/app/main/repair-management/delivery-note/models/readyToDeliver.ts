export interface CustomerDetails {
    id: number;
    companyName: string;
    companyCode: string;
    customerName: string;
    customerEmail: string;
    deliveryAddressLine1: string;
    deliveryAddressLine2: string;
    deliveryAddressLine3?: any;
}

export interface Device {
    caseId: number;
    deviceSerialNumber: string;
    deviceAssetNumber: string;
    actionResult: string;
    additionalNotes: string;
}

export interface ReadyForDelivery {
    id: number;
    partNumber: string;
    deviceDescription: string;
    quantity: number;
    devices: Device[];
}

export interface readyToDeliver {
    id: string;
    generatedDate: string;
    deliveryDate: string;
    assetCodeHidden: boolean;
    actionEditable: boolean;
    customerDetails: CustomerDetails;
    readyForDelivery: ReadyForDelivery[];
}
