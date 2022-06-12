import { add } from "./add.js";
import { sub } from "./sub.js";
import { multiple } from "./multiple.js";

const addRes = add(2, 4);
console.log(addRes);
const subRes = sub(2, 4);
console.log(subRes);
const multipleRes = multiple(2, 4);
console.log(multipleRes);


import * as fs from "fs";

fs.writeFile("example.txt", "Hello World", (err) => {
    if (err) {
        console.log(err);
    }
});