// const express = require('express');
// const fs = require('fs');
// const app = express();
// const PORT = 8080;

// app.use(express.json());

// Función para manejar persistencia en archivos
// class FileManager {
//   constructor(file) {
//     this.file = file;
//   }

//   async readFile() {
//     try {
//       const data = await fs.promises.readFile(this.file, 'utf-8');
//       return JSON.parse(data);
//     } catch {
//       return [];
//     }
//   }

//   async writeFile(data) {
//     await fs.promises.writeFile(this.file, JSON.stringify(data, null, 2));
//   }
// }

// const productManager = new FileManager('products.json');
// const cartManager = new FileManager('carts.json');

// Router para productos
// const productRouter = express.Router();

// productRouter.get('/', async (req, res) => {
//   const products = await productManager.readFile();
//   res.json(products);
// });

// productRouter.get('/:pid', async (req, res) => {
//   const { pid } = req.params;
//   const products = await productManager.readFile();
//   const product = products.find(p => p.id === pid);
//   if (product) res.json(product);
//   else res.status(404).json({ message: 'Producto no encontrado' });
// });

// productRouter.post('/', async (req, res) => {
//   const { title, description, code, price, status, stock, category, thumbnails } = req.body;
//   const products = await productManager.readFile();
//   const newProduct = {
//     id: (Date.now() + Math.random()).toString(),
//     title,
//     description,
//     code,
//     price,
//     status,
//     stock,
//     category,
//     thumbnails
//   };
//   products.push(newProduct);
//   await productManager.writeFile(products);
//   res.status(201).json(newProduct);
// });

// productRouter.put('/:pid', async (req, res) => {
//   const { pid } = req.params;
//   const updates = req.body;
//   const products = await productManager.readFile();
//   const index = products.findIndex(p => p.id === pid);
//   if (index !== -1) {
//     products[index] = { ...products[index], ...updates, id: products[index].id };
//     await productManager.writeFile(products);
//     res.json(products[index]);
//   } else res.status(404).json({ message: 'Producto no encontrado' });
// });

// productRouter.delete('/:pid', async (req, res) => {
//   const { pid } = req.params;
//   const products = await productManager.readFile();
//   const filteredProducts = products.filter(p => p.id !== pid);
//   if (filteredProducts.length < products.length) {
//     await productManager.writeFile(filteredProducts);
//     res.json({ message: 'Producto eliminado' });
//   } else res.status(404).json({ message: 'Producto no encontrado' });
// });

// Router para carritos
// const cartRouter = express.Router();

// cartRouter.post('/', async (req, res) => {
//   const carts = await cartManager.readFile();
//   const newCart = {
//     id: (Date.now() + Math.random()).toString(),
//     products: []
//   };
//   carts.push(newCart);
//   await cartManager.writeFile(carts);
//   res.status(201).json(newCart);
// });

// cartRouter.get('/:cid', async (req, res) => {
//   const { cid } = req.params;
//   const carts = await cartManager.readFile();
//   const cart = carts.find(c => c.id === cid);
//   if (cart) res.json(cart.products);
//   else res.status(404).json({ message: 'Carrito no encontrado' });
// });

// cartRouter.post('/:cid/product/:pid', async (req, res) => {
//   const { cid, pid } = req.params;
//   const carts = await cartManager.readFile();
//   const cart = carts.find(c => c.id === cid);
//   if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });

//   const product = cart.products.find(p => p.product === pid);
//   if (product) {
//     product.quantity += 1;
//   } else {
//     cart.products.push({ product: pid, quantity: 1 });
//   }

//   await cartManager.writeFile(carts);
//   res.json(cart);
// });

// Configuración de los routers
// app.use('/api/products', productRouter);
// app.use('/api/carts', cartRouter);

// Inicio del servidor
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });
