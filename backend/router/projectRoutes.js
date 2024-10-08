import express from "express";
import {
  addProject,
  deleteProject,
  updateProject,
  getAllProjects,
  getSingleProject,
} from "../controller/projectController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addProject);
router.delete("/delete/:id", isAuthenticated, deleteProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.get("/getAll", getAllProjects);
router.get("/:id", getSingleProject);

export default router;
