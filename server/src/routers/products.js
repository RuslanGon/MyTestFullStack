import { Router } from "express";
import { ctrlWrapper } from "../middlewars/ctrlWrapper.js";
import { getAllProductsController } from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProductsController));

export default productsRouter;
