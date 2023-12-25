function mergeObjects(car1, car2){
    const mergeObject = {car1, car2};
    return mergeObject;
}

const car1 = {
    brand: "Ford",
    model: "Gt-50",
    year: "2021",
};

const car2 = {
    brand: "Nissan",
    model: "370Z",
    year: "2019",
}

console.log(mergeObjects(car1, car2));