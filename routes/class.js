import express from "express";
import {
  addClass,
  deleteClass,
  detailClass,
  editClass,
  getClassByUserId,
  getListClass,
  joinClass,
} from "../controllers/class";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: Classes managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Class:
 *       type: object
 *       required:
 *         - nameClass
 *         - lever
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Classes
 *         nameClass:
 *           type: string
 *           description: nameClass of Classes
 *         linkJoinClass:
 *           type: String
 *           description: linkJoinClass of Classes
 *         lever:
 *           type: string
 *           description: lever of Classes
 *         userOfClass:
 *           type: Array
 *           description: userOfClass of Classes
 *         createdAt:
 *           type: string
 *           description: Create Time of Classes
 *         updatedAt:
 *           type: string
 *           description: Update Time of Classes
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         nameClass: Your friend is tall
 *         linkJoinClass: link.com
 *         userOfClass: [
 *              {
 *                  userId: 62e8c62b587bcad52fbaf0b7,
 *                  timeJoinClass: 2022-08-02T06:37:31.665+00:00
 *              }
 *          ]
 *         lever: master
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     classId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Class id
 *
 * */

// -------------------Get List Class----------------------
/**
 * @swagger
 *   /api/classes:
 *     get:
 *       summary: Return the list of all Classes
 *       tags: [Classes]
 *       responses:
 *         200:
 *           description: The List of Classes
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Class'
 *
 * */
router.get("/classes", getListClass);

// -------------------Get Detail Class----------------------
/**
 * @swagger
 *   /api/class/{id}:
 *     get:
 *       summary: Get Class by id
 *       tags: [Classes]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Classes id
 *       responses:
 *           200:
 *             description: The Classes detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Class'
 *           400:
 *             description: The Classes is Not found
 */

router.get("/class/:id", detailClass);


// -------------------Get Class of UserId----------------------
/**
 * @swagger
 *   /api/class/get-class-by-user/{userId}:
 *     get:
 *       summary: Get Class by userId
 *       tags: [Classes]
 *       parameters:
 *           - in: path
 *             name: userId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Classes userId
 *       responses:
 *           200:
 *             description: The Classes by userId
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Class'
 *           400:
 *             description: The Classes is Not found
 */

 router.get("/class/get-class-by-user/:userId", getClassByUserId);

// -------------------Add Class----------------------
/**
 * @swagger
 * /api/class:
 *   post:
 *     summary: Create a Class
 *     tags: [Classes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Fail to create a Class
 */

router.post("/class", addClass);

// -------------------Update Class----------------------
/**
 * @swagger
 * /api/class/{id}:
 *   put:
 *     summary: Update a Class
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Fail to updated a Class
 */

router.put("/class/:id", editClass);

// -------------------Remove Class----------------------
/**
 * @swagger
 * /api/class/{id}:
 *   delete:
 *     summary: Remove a Class by id
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Fail to removed a Class
 */

router.delete("/class/:id", deleteClass);


// -------------------Join Class----------------------
/**
 * @swagger
 * /api/join-class?userId={userId}&link={link}:
 *   get:
 *     summary: Join a Class by link
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class userId
 *       - in: path
 *         name: link
 *         schema:
 *           type: string
 *         required: true
 *         description: The Class link
 *     responses:
 *       200:
 *         description: Class was successfully join
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Fail to join a Class
 */

 router.get("/join-class", joinClass);

export default router;
