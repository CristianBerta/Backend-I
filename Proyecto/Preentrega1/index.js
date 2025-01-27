// import express from "express";
// import productsRouter from "./routers/productsRouter.js";
// import cartsRouter from "./routers/cartsRouter.js";

// const app = express();
// const port = 8080;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/api/products", productsRouter);
// app.use("/api/carts", cartsRouter);

// app.listen(port, () => {
//     console.log("Servidor online en el puerto: " + port);
// });

import express from "express";
import productsRouter from "./routers/productsRouter.js";
import cartsRouter from "./routers/cartsRouter.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(port, () => {
    console.log("Servidor online en el puerto: " + port);
});