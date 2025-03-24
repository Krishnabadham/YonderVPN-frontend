export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
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