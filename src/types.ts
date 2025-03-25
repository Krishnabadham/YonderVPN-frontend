export type User = {
    _id: string;
    email: string;
    name: string;
    isAdmin: Boolean;
    addressLine1: string;
    city: string;
    country: string;
};

export type OrderStatus = "placed"| "paid"| "inProgress"| "outForDelivery"| "delivered";

export type Order = {
    _id: string;
    vpn: Vpn
    user: User;
    cartItems: {
        menuItemid: string;
        name:string;
        quantity: string;
    }[];
    deliveryDetails: {
        name: string;
        addressLine1: string;
        city: string;
        email: string;
    };
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
    vpnId: string;
};

export type MenuItem = {
    _id: string;
    name: string;
    price: number;
};

export type Vpn = {
    _id: string;
    user: string;
    vpnName: string;
    city: string;
    country: string;
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
};

export type VpnSearchResponse = {
    data: Vpn[];
    pagination:{
        total: number;
        page: number;
        pages: number;
    };
};