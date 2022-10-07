import express from "express";
import { addAnswerQuiz, deleteAnswerQuiz, detailAnswerQuiz, editAnswerQuiz, listAnswerQuiz } from "../controllers/answerQuiz";



const router = express.Router()

// ------ GET ---------------

/**
* @swagger
* tags:
*   name: AnswerQuizs
*   description: AnswerListenWrite managing API
*/

/**
 * @swagger 
 * components:
 *   schemas:
 *     AnswerQuiz:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of AnswerQuiz
 *         quiz:
 *            type: ObjectId
 *            description: test
 *         answer:
 *            type: string 
 *            description: Content ofAnswerQuiz
 *         isCorrect: 
 *            type: Number
 *            description: iscorrect of AnswerQuiz
 *         createdAt: 
 *           type: string
 *           description: Create Time of quiz
 *         updatedAt: 
 *           type: string
 *           description: Update Time of quiz
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         quiz: 62c861d6d3bb7dc9bcbc87a9
 *         answer: Demo answer 
 *         isCorrect: 1     
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     AnswerQuizID:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The AnswerQuiz id
 * 
 * */

 router.get("/answerQuiz", listAnswerQuiz )
/**
 * @swagger
 *   /api/answerQuiz:
 *     get:
 *       summary: Return the list of all quizs
 *       tags: [AnswerQuizs]
 *       responses:
 *         200: 
 *           description: The List of AnswerQuiz
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/AnswerQuiz'
 *              
 * */

// -------------------Get Detail----------------------

/**
 * @swagger
 *   /api/answerQuiz/{id}:
 *     get:
 *       summary: Get Quiz by id
 *       tags: [AnswerQuizs]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The AnswerQuiz id
 *       responses:
 *           200:
 *             description: The AnswerQuiz detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/AnswerQuiz'
 *           400:
 *             description: The AnswerListenWrite is Not found
 */
 router.get("/answerQuiz/:id", detailAnswerQuiz )

//  ---------------- ADD -------------------
/**
 * @swagger
 * /api/answerQuiz:
 *   post:
 *     summary: Create a quiz
 *     tags: [AnswerQuizs]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerQuiz'
 *     responses:
 *       200: 
 *         description: AnswerQuiz was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerQuiz'
 *       400: 
 *         description: Fail to create a AnswerQuiz
 */
 router.post("/answerQuiz", addAnswerQuiz )

// ----------- Edit ---------------
/**
 * @swagger
 * /api/answerQuiz/{id}:
 *   put:
 *     summary: Update a AnswerQuiz
 *     tags: [AnswerQuizs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The AnswerQuiz id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerQuiz'
 *     responses:
 *       200: 
 *         description: AnswerQuiz was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerQuiz'
 *       400: 
 *         description: Fail to updated a AnswerQuiz
 */
 router.put("/answerQuiz/:id", editAnswerQuiz )

//  ------------ Delete --------------
/**
 * @swagger
 * /api/answerQuiz/{id}:
 *   delete:
 *     summary: Remove a quiz by id
 *     tags: [AnswerQuizs]
 *     parameters:
 *       - $ref: '#/components/parameters/AnswerQuizID'
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerQuiz'
 *     responses:
 *       200: 
 *         description: AnswerQuiz was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerQuiz'
 *       400: 
 *         description: Fail to removed a AnswerQuiz
 */
 router.delete("/answerQuiz/:id", deleteAnswerQuiz )


export default router