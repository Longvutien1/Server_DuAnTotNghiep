import express from "express";
import { addAnswerSpeak, deleteAnswerSpeak, detailAnswerSpeak, editAnswerSpeak, listAnswerSpeak } from "../controllers/answerSpeak";



const router = express.Router()

/**
* @swagger
* tags:
*   name: AnswerSpeaks
*   description: AnswerListenWrite managing API
*/

/**
 * @swagger 
 * components:
 *   schemas:
 *     AnswerSpeak:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of AnswerSpeak
 *         speak:
 *            type: ObjectId
 *            description: test
 *         content:
 *            type: string 
 *            description: Content of answer speak
 *         createdAt: 
 *           type: string
 *           description: Create Time of quiz
 *         updatedAt: 
 *           type: string
 *           description: Update Time of quiz
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         speak: 62f66676f8b0c6e184ea5042
 *         content: Demo Speak   
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     AnswerSpeakID:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The AnswerSpeak id
 * 
 * */

 router.get("/answerSpeak", listAnswerSpeak )
/**
 * @swagger
 *   /api/answerSpeak:
 *     get:
 *       summary: Return the list of all AnswerSpeak
 *       tags: [AnswerSpeaks]
 *       responses:
 *         200: 
 *           description: The List of AnswerSpeak
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/AnswerSpeak'
 *              
 * */

// -------------------Get Detail----------------------

/**
 * @swagger
 *   /api/answerSpeak/{id}:
 *     get:
 *       summary: Get AnswerSpeak by id
 *       tags: [AnswerSpeaks]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The AnswerSpeak id
 *       responses:
 *           200:
 *             description: The AnswerSpeak detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/AnswerSpeak'
 *           400:
 *             description: The AnswerSpeak is Not found
 */
 router.get("/answerSpeak/:id", detailAnswerSpeak )

//  ---------------- ADD -------------------
/**
 * @swagger
 * /api/answerSpeak:
 *   post:
 *     summary: Create a AnswerSpeak
 *     tags: [AnswerSpeaks]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerSpeak'
 *     responses:
 *       200: 
 *         description: AnswerSpeak was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerSpeak'
 *       400: 
 *         description: Fail to create a AnswerSpeak
 */
 router.post("/answerSpeak", addAnswerSpeak )

// ----------- Edit ---------------
/**
 * @swagger
 * /api/answerSpeak/{id}:
 *   put:
 *     summary: Update a AnswerSpeak
 *     tags: [AnswerSpeaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The AnswerSpeak id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerSpeak'
 *     responses:
 *       200: 
 *         description: AnswerSpeak was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerSpeak'
 *       400: 
 *         description: Fail to updated a AnswerSpeak
 */
 router.put("/answerSpeak/:id", editAnswerSpeak )

//  ------------ Delete --------------
/**
 * @swagger
 * /api/answerSpeak/{id}:
 *   delete:
 *     summary: Remove a AnswerSpeak by id
 *     tags: [AnswerSpeaks]
 *     parameters:
 *       - $ref: '#/components/parameters/AnswerSpeakID'
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnswerSpeak'
 *     responses:
 *       200: 
 *         description: AnswerSpeak was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AnswerSpeak'
 *       400: 
 *         description: Fail to removed a AnswerSpeak
 */
 router.delete("/answerSpeak/:id", deleteAnswerSpeak )


export default router