import express from "express";
import { createCustomer, loginCustomer, getCustomerById, getAllCustomers, updateCustomer, deleteCustomer } from "../controllers/CustomerController.js";

const router = express.Router();

router.post("/create_customer", createCustomer);
router.post("/login_customer", loginCustomer);
router.get("/get_customer/:id", getCustomerById);
router.get("/get_all_customers", getAllCustomers);
router.put("/update_customer/:id", updateCustomer);
router.delete("/delete_customer/:id", deleteCustomer);

export default router;