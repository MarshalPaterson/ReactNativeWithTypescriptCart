import * as React from 'react';
import Product from '../entities/Product';

export default class Products {
    constructor() {
    }

    public getProducts(): Array<Product> {
        let a: Array<Product> = data;
        return a;
    }
}

const data = [
    {
        "Id": "1",
        "Product": "Microwave oven",
        "Category": "Electronics",
        "Name": "Microwave oven",
        "Image": "Microwave.jpg",
        "Price": "70.00"
    },
    {
        "Id": "2",
        "Product": "Television",
        "Category": "Electronics",
        "Name": "Television",
        "Image": "TV.jpg",
        "Price": "199.99"
    },
    {
        "Id": "3",
        "Product": "Vacuum Cleaner",
        "Category": "Electronics",
        "Name": "Vacuum Cleaner",
        "Image": "VacuumCleaner.jpg",
        "Price": "32.50"
    },
    {
        "Id": "4",
        "Product": "Table",
        "Category": "Furniture",
        "Name": "Table",
        "Image": "Table.jpg",
        "Price": "27.80"
    },
    {
        "Id": "5",
        "Product": "Chair",
        "Category": "Furniture",
        "Name": "Chair",
        "Image": "Chair.jpg",
        "Price": "15.00"
    },
    {
        "Id": "6",
        "Product": "Almirah",
        "Category": "Furniture",
        "Name": "Almirah",
        "Image": "Almirah.jpg",
        "Price": "455.99"
    }
]
