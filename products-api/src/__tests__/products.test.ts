import supertest from "supertest";
import { router } from "../app";

//TESING GET REQUEST FOR ALL PRODUCTS
describe("GET /api/products", () => {
    it("should return all products", async () => {
        await supertest(router).get('/api/products')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

//TESING GET REQUEST FOR SPECIFIC PRODUCT
describe("GET /api/products/:id", () => {
    const id = "p01";
    it("should return all products", async () => {
        await supertest(router).get(`/api/products/${id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

//TESING POST REQUEST FOR ADD A PRODUCT
describe("POST /api/products", () => {
    const product = {
        productName: "N72",
        category: "Mobile",
        company: "Nokia",
        price: "200$"
    };
    it("should return all products", async () => {
        await supertest(router).post(`/api/products`)
            .send(product)
            .expect(201);
    });
});

//TESTING PUT REQUEST FOR UPDATE A PRODUCT
describe("PUT /api/products/:id", () => {
    const id = "p01";
    const product = {
        productName: "I-Phone 14",
        category: "Mobile",
        company: "Apple",
        price: "1200$"
    };
    it("should return all products", async () => {
        await supertest(router).put(`/api/products/${id}`)
            .send(product)
            .expect(201);
    });
});

//TESTING DELETE REQUEST FOR DELETE A PRODUCT
describe("DELETE /api/products/:id", () => {
    const id = "p01";
    it("should return all products", async () => {
        await supertest(router).delete(`/api/products/${id}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});