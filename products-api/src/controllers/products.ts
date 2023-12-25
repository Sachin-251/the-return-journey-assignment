import { Request, Response, NextFunction } from 'express';
import products from '../data/data';
import ShortUniqueId from 'short-unique-id';

interface Product {
    id: String;
    productName: String;
    category: String;
    company: String;
    price: String; 
};

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(200).json({Products: products});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //GETTING ID FROM REQUEST PARAMETERS
        let {id} = req.params;

        //FINDING THE PRODUCT WITH MENTIONED ID
        let foundProduct = products.find((product) => {
            return product.id === id;
        });


        return res.status(200).json({Product: foundProduct});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
};

const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const uid = new ShortUniqueId({length: 3});
        //GENERATING RANDOM ID
        let id: string = uid.rnd();

        //GETTING VALUES FROM REQUEST BODY
        let productName: string = req.body.productName;
        let category: string = req.body.category;
        let company: string = req.body.company;
        let price: string = req.body.price;

        //PUSHING VALUES IN ARRAY
        products.push({id, productName, category, company, price});

        return res.status(201).json({message: "Product Added"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //GETTING ID FROM REQUEST PARAMETERS
        let {id} = req.params;

        //GETTING VALUES FROM REQUEST BODY
        let productName: string = req.body.productName ?? null;
        let category: string = req.body.category ?? null;
        let company: string = req.body.company ?? null;
        let price: string = req.body.price ?? null;

        //FINDING PRODUCT FROM ID
        let foundProduct: any = products.find((product) => {
            return product.id === id;
        });

        //UPDATING THE NON NULL VALUES
        if(productName !== null) foundProduct.productName = productName;
        if(category !== null) foundProduct.category = category;
        if(company !== null) foundProduct.company = company;
        if(price !== null) foundProduct.price = price;
        
        return res.status(201).json({message: "Product Updated"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //GETTING ID FROM REQUEST PARAMENTRS
        let {id} = req.params;

        //DELETING THE PRODUCT
        products.splice(products.findIndex(product => product.id === id), 1);

        return res.status(200).json({message: "Product Deleted"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
}

export default { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
