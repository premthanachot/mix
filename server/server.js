import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDatabace from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
// import stripeRoute from "./Routes/stripe.js";
// import cors from "cors";

dotenv.config();
connectDatabace();
const app = express();
// const stripeRoute = require("./routes/stripe");
// const cors = require("cors");
app.use(express.json());

// app.use(cors());
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
// app.get("/api/config/paypal", (req, res) => {
//   res.send(process.env.STRIPE_KEY);
// });
// app.use("/api/checkout", stripeRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server is running port ${PORT}`));
