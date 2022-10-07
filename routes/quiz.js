import express from "express";
import { addQuiz, deleteQuiz, detailQuiz, editQuiz, listQuiz } from "../controllers/quiz";


const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Quizs
 *   description: Quiz managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger 
 * components:
 *   schemas:
 *     Quiz:
 *       type: object
 *       required:
 *         - category
 *         - question
 *         - image
 *         - timeLimit
 *         - type
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of quiz
 *         category: 
 *           type: string
 *           description: Category of quiz
 *         question: 
 *           type: string
 *           description: Question of quiz
 *         image: 
 *           type: string
 *           description: Image of quiz
 *         timeLimit: 
 *           type: string
 *           description: The time limit to do quiz
 *         type: 
 *           type: number
 *           description: Type of quiz
 *         createdAt: 
 *           type: string
 *           description: Create Time of quiz
 *         updatedAt: 
 *           type: string
 *           description: Update Time of quiz
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         category: 62c861d6d3bb7dc9bcbc87a9
 *         question: Your friend is tall
 *         image: http://res.cloudinary.com/vintph16172/image/upload/v1659422268/lfgxp9ej8ygpyp7swldw.png
 *         timeLimit: 12122
 *         type: 3
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     quizId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The quiz id
 * 
 * */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */


// -------------------Get List Quiz----------------------
/**
 * @swagger
 *   /api/quizs:
 *     get:
 *       summary: Return the list of all quizs
 *       tags: [Quizs]
 *       responses:
 *         200: 
 *           description: The List of quiz
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Quiz'
 *              
 * */
router.get("/quizs", listQuiz)

// -------------------Get Detail Quiz----------------------
/**
 * @swagger
 *   /api/quizs/{id}:
 *     get:
 *       summary: Get Quiz by id
 *       tags: [Quizs]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The quiz id
 *       responses:
 *           200:
 *             description: The Quiz detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Quiz'
 *           400:
 *             description: The Quiz is Not found
 */

router.get("/quizs/:id", detailQuiz)

// -------------------Add Quiz----------------------
/**
 * @swagger
 * /api/quizs:
 *   post:
 *     summary: Create a quiz
 *     tags: [Quizs]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200: 
 *         description: Quiz was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400: 
 *         description: Fail to create a Quiz
 */

router.post("/quizs", addQuiz)

// -------------------Update Quiz----------------------
/**
 * @swagger
 * /api/quizs/{id}:
 *   put:
 *     summary: Update a quiz
 *     tags: [Quizs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Quiz id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200: 
 *         description: Quiz was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400: 
 *         description: Fail to updated a Quiz
 */

router.put("/quizs/:id", editQuiz)

// -------------------Remove Quiz----------------------
/**
 * @swagger
 * /api/quizs/{id}:
 *   delete:
 *     summary: Remove a quiz by id
 *     tags: [Quizs]
 *     parameters:
 *       - $ref: '#/components/parameters/quizId'
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200: 
 *         description: Quiz was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400: 
 *         description: Fail to removed a Quiz
 */

router.delete("/quizs/:id", deleteQuiz)

export default router