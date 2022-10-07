import express from "express";
import { addAnswerListenWrite, deleteAnswerListenWrite, detailAnswerListenWrite, editAnswerListenWrite, listAnswerListenWrite } from "../controllers/answerListenWrite";

// test
const router = express.Router()
// ------ GET ---------------

/**
* @swagger
* tags:
*   name: AnswerListenWrites
*   description: AnswerListenWrite managing API
*/

/**
 * @swagger 
 * components:
 *   schemas:
 *     AnswerListen:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of AnswerListenWrite
 *         listenWrite:
 *            type: ObjectId
 *            description: test
 *         content:
 *            type: string 
 *            description: Content of answer listen
 *         createdAt: 
 *           type: string
 *           description: Create Time of quiz
 *         updatedAt: 
 *           type: string
 *           description: Update Time of quiz
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         listenWrite: 62ff6998b77f3ffb3d4ec7c1
 *         content: Demo      
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     AnswerListenID:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The answerListenWrite id
 * 
 * */

/**
 * @swagger
 * components:
 *   schemas:
 *     Demo:
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
 router.get("/answerListenWrite", listAnswerListenWrite )
/**
 * @swagger
 *   /api/answerListenWrite:
 *     get:
 *       summary: Return the list of all quizs
 *       tags: [AnswerListenWrites]
 *       responses:
 *         200: 
 *           description: The List of answerListenWrite
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/AnswerListen'
 *              
 * */

// -------------------Get Detail----------------------

/**
 * @swagger
 *   /api/answerListenWrite/{id}:
 *     get:
 *       summary: Get Quiz by id
 *       tags: [AnswerListenWrites]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The AnswerListenWrite id
 *       responses:
 *           200:
 *             description: The AnswerListenWrite detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/AnswerListen'
 *           400:
 *             description: The AnswerListenWrite is Not found
 */
 router.get("/answerListenWrite/:id", detailAnswerListenWrite )

//  ---------------- ADD -------------------
/**
 * @swagger
 * /api/answerListenWrite:
 *   post:
 *     summary: Create a quiz
 *     tags: [AnswerListenWrites]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerListen'
 *     responses:
 *       200: 
 *         description: AnswerListenWrite was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerListen'
 *       400: 
 *         description: Fail to create a AnswerListenWrite
 */
router.post("/answerListenWrite", addAnswerListenWrite )

// ----------- Edit ---------------
/**
 * @swagger
 * /api/answerListenWrite/{id}:
 *   put:
 *     summary: Update a answeListenWrite
 *     tags: [AnswerListenWrites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The AnswerListenWrite id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerListen'
 *     responses:
 *       200: 
 *         description: AnswerListenWrite was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerListen'
 *       400: 
 *         description: Fail to updated a AnswerListenWrite
 */
router.put("/answerListenWrite/:id", editAnswerListenWrite )

//  ------------ Delete --------------
/**
 * @swagger
 * /api/answerListenWrite/{id}:
 *   delete:
 *     summary: Remove a quiz by id
 *     tags: [AnswerListenWrites]
 *     parameters:
 *       - $ref: '#/components/parameters/AnswerListenID'
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerListen'
 *     responses:
 *       200: 
 *         description: AnswerListen was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerListen'
 *       400: 
 *         description: Fail to removed a AnswerListen
 */
router.delete("/answerListenWrite/:id", deleteAnswerListenWrite )

export default router