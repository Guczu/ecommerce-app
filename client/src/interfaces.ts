export interface Product {
    _id: string;
    name: string;
    price: number;
    category: string;
    color: string;
    amount: number;
    description: string;
    images: string[];
    cartQuantity: number;
    [key: string]: any;
}

export interface UserData {
    name: string | undefined;
    address: string | undefined;
    city: string | undefined;
    zipcode: string | undefined;
    mobile: number | undefined;
    email: string | undefined;
}

export interface FormErrors {
    [key: string]: string;
}

export interface FiltersList {
    category: string[] | null;
    price: number[] | null;
    color: string[] | null;
    sortBy: string | null;
    [key: string]: any;
}
