import { StringLiteral } from "typescript";

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
}

export interface UserData {
    name: string;
    address: string;
    city: string;
    zipcode: number;
    mobile: number;
    email: string;
}

export interface FormErrors {
    [key: string]: string;
  }