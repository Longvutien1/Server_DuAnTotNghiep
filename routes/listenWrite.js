import express from "express";
import { addListenWrite, deleteListenWrite, detailListenWrite, detailListenWriteByActivity, editListenWrite, listListenWrite } from "../controllers/listenWrite";



const router = express.Router()


// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: ListenWrites
 *   description: ListenWrites managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     ListenWrite:
 *       type: object
 *       required:
 *         - area
 *         - practiceActivity
 *         - content
 *         - audio
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of ListenWrites
 *         area:
 *           type: string
 *           description: area of ListenWrites
 *         practiceActivity:
 *           type: string
 *           description: practiceActivity of ListenWrites
 *         content:
 *           type: Array
 *           description: content of ListenWrites
 *         audio:
 *           type: string
 *           description: audio of ListenWrites
 *         createdAt:
 *           type: string
 *           description: Create Time of ListenWrites
 *         updatedAt:
 *           type: string
 *           description: Update Time of ListenWrites
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         area: area
 *         practiceActivity: 62e8c62b587bcad52fbaf0b
 *         content: [
 *              {
 *                  name: name,
 *                  text: text,
 *                  answer: Array
 *              }
 *          ]
 *         audio: audio
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     ListenWriteId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The ListenWrite id
 *
 * */

// -------------------Get List ListenWrite----------------------
/**
 * @swagger
 *   /api/listenWrite:
 *     get:
 *       summary: Return the list of all ListenWrites
 *       tags: [ListenWrites]
 *       responses:
 *         200:
 *           description: The List of ListenWrites
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ListenWrite'
 *
 * */
 router.get("/listenWrite", listListenWrite )


 // -------------------Get Detail ListenWrite----------------------
 /**
  * @swagger
  *   /api/listenWrite/{id}:
  *     get:
  *       summary: Get ListenWrite by id
  *       tags: [ListenWrites]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The ListenWrites id
  *       responses:
  *           200:
  *             description: The ListenWrites detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/ListenWrite'
  *           400:
  *             description: The ListenWrites is Not found
  */
 
  router.get("/listenWrite/:id", detailListenWrite )

 // -------------------Get writeAndListen ListenWrite----------------------
 /**
  * @swagger
  *   /api/listenWrite/{id}/writeAndListen:
  *     get:
  *       summary: Get ListenWrite by id
  *       tags: [ListenWrites]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The ListenWrites id
  *       responses:
  *           200:
  *             description: The ListenWrites detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/ListenWrite'
  *           400:
  *             description: The ListenWrites is Not found
  */
 
  router.get("/listenWrite/:id/writeAndListen", detailListenWriteByActivity )

 
 // -------------------Add ListenWrite----------------------
 /**
  * @swagger
  * /api/listenWrite:
  *   post:
  *     summary: Create a ListenWrite
  *     tags: [ListenWrites]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ListenWrite'
  *     responses:
  *       200:
  *         description: ListenWrite was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ListenWrite'
  *       400:
  *         description: Fail to create a ListenWrite
  */
 
  router.post("/listenWrite", addListenWrite )



 
 // -------------------Update ListenWrite----------------------
 /**
  * @swagger
  * /api/listenWrite/{id}:
  *   put:
  *     summary: Update a ListenWrite
  *     tags: [ListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The ListenWrite id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ListenWrite'
  *     responses:
  *       200:
  *         description: ListenWrite was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ListenWrite'
  *       400:
  *         description: Fail to updated a ListenWrite
  */
 
  router.put("/listenWrite/:id", editListenWrite )



 
 // -------------------Remove ListenWrite----------------------
 /**
  * @swagger
  * /api/listenWrite/{id}:
  *   delete:
  *     summary: Remove a ListenWrite by id
  *     tags: [ListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The ListenWrite id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ListenWrite'
  *     responses:
  *       200:
  *         description: ListenWrite was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ListenWrite'
  *       400:
  *         description: Fail to removed a ListenWrite
  */
  router.delete("/listenWrite/:id", deleteListenWrite )

export default router