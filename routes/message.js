import express from "express";
import { createMessage, getMessageByGroup, removeMessage, updateMessage } from "../controllers/message";


const router = express.Router();


// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Message managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger 
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - userId
 *         - message
 *         - classId
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of Message
 *         message: 
 *           type: string
 *           description: message of Message
 *         classId: 
 *           type: string
 *           description: classId of Message
 *         userId: 
 *           type: string
 *           description: userId of Message
 *         status: 
 *           type: Boolean
 *           description: status of Message
 *         createdAt: 
 *           type: string
 *           description: Create Time of Message
 *         updatedAt: 
 *           type: string
 *           description: Update Time of Message
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         message: String
 *         classId: 62e8c62b587bcad52fbaf0b7
 *         userId: 62e8c62b587bcad52fbaf0b7
 *         status: true
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     MessageId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Message id
 * 
 * */

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - message
 *         - userId
 *         - classId
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the book
 *         message:
 *           type: string
 *           description: The message 
 *         userId:
 *           type: string
 *           description: The userId
 *         classId:
 *           type: string
 *           description: The classId
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         message: message
 *         userId: 62e8c62b587bcad52fbaf0b7
 *         classId: 62e8c62b587bcad52fbaf0b7
 *         status: true
 */

// -------------------Add Message----------------------
/**
 * @swagger
 * /api/message:
 *   post:
 *     summary: Create a Message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Fail to create a Message
 */

 router.post("/message", createMessage);


// -------------------Update Message----------------------
/**
 * @swagger
 * /api/message/{id}:
 *   put:
 *     summary: Update a Message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Message id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Fail to updated a Message
 */

 router.put("/message/:id", updateMessage);


// -------------------Remove Message----------------------
/**
 * @swagger
 * /api/message/{id}:
 *   delete:
 *     summary: Remove a Message by id
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Message id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       400:
 *         description: Fail to removed a Message
 */

 router.delete("/message/:id", removeMessage);

// -------------------Get Message by class----------------------
/**
 * @swagger
 *   /api/message/{classId}:
 *     get:
 *       summary: Get Messages by classId
 *       tags: [Messages]
 *       parameters:
 *           - in: path
 *             name: classId
 *             schema:
 *               type: string
 *             required: true
 *             description: The message by classId
 *       responses:
 *           200:
 *             description: The Message by classId
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Message'
 *           400:
 *             description: The Message is Not found
 */

 router.get("/message/:classId", getMessageByGroup);


export default router;