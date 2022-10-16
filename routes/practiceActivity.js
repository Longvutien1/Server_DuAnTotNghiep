import express from "express";
import { addPracticeActivity, deletePracticeActivity, detailPracticeActivity, editPracticeActivity, getListPracticeActivity, getListPracticeActivityByDay } from "../controllers/practiceActivity";


const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: PracticeActivity
 *   description: PracticeActivity managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     PracticeActivity:
 *       type: object
 *       required:
 *         - title
 *         - type
 *         - day
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of PracticeActivity
 *         title:
 *           type: string
 *           description: title of PracticeActivity
 *         type:
 *           type: number
 *           description: type of PracticeActivity
 *         day:
 *           type: string
 *           description: day of PracticeActivity
 *         createdAt:
 *           type: string
 *           description: Create Time of PracticeActivity
 *         updatedAt:
 *           type: string
 *           description: Update Time of PracticeActivity
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         title: Your title in PracticeActivity
 *         type: 0
 *         day: 62e8c62b587bcad52fbaf0b7
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     practiceActivityId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The PracticeActivity id
 *
 * */

// -------------------Get List PracticeActivity----------------------
/**
 * @swagger
 *   /api/practiceActivities:
 *     get:
 *       summary: Return the list of all PracticeActivity
 *       tags: [PracticeActivity]
 *       responses:
 *         200:
 *           description: The List of PracticeActivity
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/PracticeActivity'
 *
 * */
router.get("/practiceActivities", getListPracticeActivity);

// -------------------Get Detail PracticeActivity----------------------
/**
 * @swagger
 *   /api/practiceActivity/day/{id}:
 *     get:
 *       summary: Get PracticeActivity by Day
 *       tags: [PracticeActivity]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Day id
 *       responses:
 *           200:
 *             description: The PracticeActivity detail by Day
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/PracticeActivity'
 *           400:
 *             description: The PracticeActivity is Not found
 */

router.get("/practiceActivity/day/:id", getListPracticeActivityByDay);

// -------------------Get Detail PracticeActivity----------------------
/**
 * @swagger
 *   /api/practiceActivity/{id}:
 *     get:
 *       summary: Get PracticeActivity by id
 *       tags: [PracticeActivity]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The PracticeActivity id
 *       responses:
 *           200:
 *             description: The PracticeActivity detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/PracticeActivity'
 *           400:
 *             description: The PracticeActivity is Not found
 */

router.get("/practiceActivity/:id", detailPracticeActivity);

// -------------------Add PracticeActivity----------------------
/**
 * @swagger
 * /api/practiceActivity:
 *   post:
 *     summary: Create a PracticeActivity
 *     tags: [PracticeActivity]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PracticeActivity'
 *     responses:
 *       200:
 *         description: PracticeActivity was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PracticeActivity'
 *       400:
 *         description: Fail to create a PracticeActivity
 */

router.post("/practiceActivity", addPracticeActivity);

// -------------------Update PracticeActivity----------------------
/**
 * @swagger
 * /api/practiceActivity/{id}:
 *   put:
 *     summary: Update a PracticeActivity
 *     tags: [PracticeActivity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The PracticeActivity id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PracticeActivity'
 *     responses:
 *       200:
 *         description: PracticeActivity was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PracticeActivity'
 *       400:
 *         description: Fail to updated a PracticeActivity
 */

router.put("/practiceActivity/:id", editPracticeActivity);

// -------------------Remove PracticeActivity----------------------
/**
 * @swagger
 * /api/practiceActivity/{id}:
 *   delete:
 *     summary: Remove a PracticeActivity by id
 *     tags: [PracticeActivity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The PracticeActivity id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PracticeActivity'
 *     responses:
 *       200:
 *         description: PracticeActivity was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PracticeActivity'
 *       400:
 *         description: Fail to removed a PracticeActivity
 */

router.delete("/practiceActivity/:id", deletePracticeActivity);

export default router;
