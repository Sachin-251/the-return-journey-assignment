import {Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const {method, url} = req;
    console.log(`Time Stamp: ${timestamp}`);
    console.log(`HTTP Method: ${method}`);
    console.log(`URL: ${url}`);
    next();
}

export =  logger;