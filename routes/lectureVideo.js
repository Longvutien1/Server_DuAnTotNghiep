import express from "express";
import { addLectureVideo, deleteLectureVideo, detailLectureVideo, editLectureVideo, listLectureVideos } from "../controllers/lectureVideo";


const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: LectureVideos
 *   description: LectureVideos managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger 
 * components:
 *   schemas:
 *     LectureVideo:
 *       type: object
 *       required:
 *         - category
 *         - nameVideo
 *         - videoUrl
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of lectureVideo
 *         category: 
 *           type: string
 *           description: Category of lectureVideo
 *         nameVideo: 
 *           type: string
 *           description: name of lectureVideo
 *         videoUrl: 
 *           type: string
 *           description: Link url video of lectureVideo
 *         createdAt: 
 *           type: string
 *           description: Create Time of lectureVideo
 *         updatedAt: 
 *           type: string
 *           description: Update Time of lectureVideo
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         category: 62c861d6d3bb7dc9bcbc87a9
 *         nameVideo: Your friend is tall
 *         videoUrl: http://res.cloudinary.com/vintph16172/image/upload/v1659422268/lfgxp9ej8ygpyp7swldw.png
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     LectureVideoId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The LectureVideo id
 * 
 * */


// -------------------Get List Lecture Videos----------------------
/**
 * @swagger
 *   /api/lecture-videos:
 *     get:
 *       summary: Return the list of all LectureVideos
 *       tags: [LectureVideos]
 *       responses:
 *         200: 
 *           description: The List of LectureVideos
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/LectureVideo'
 *              
 * */
router.get("/lecture-videos", listLectureVideos)

// -------------------Get Detail Lecture Video----------------------
/**
 * @swagger
 *   /api/lecture-video/{id}:
 *     get:
 *       summary: Get Lecture Video by id
 *       tags: [LectureVideos]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Lecture Video id
 *       responses:
 *           200:
 *             description: The Lecture Video detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/LectureVideo'
 *           400:
 *             description: The Lecture Video is Not found
 */

router.get("/lecture-video/:id", detailLectureVideo)

// -------------------Add Lecture Video----------------------
/**
 * @swagger
 * /api/lecture-video:
 *   post:
 *     summary: Create a Lecture Video
 *     tags: [LectureVideos]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LectureVideo'
 *     responses:
 *       200: 
 *         description: LectureVideo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400: 
 *         description: Fail to create a LectureVideo
 */

router.post("/lecture-video", addLectureVideo)

// -------------------Update Lecture Video----------------------
/**
 * @swagger
 * /api/lecture-video/{id}:
 *   put:
 *     summary: Update a LectureVideo
 *     tags: [LectureVideos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Lecture Video id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LectureVideo'
 *     responses:
 *       200: 
 *         description: LectureVideo was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400: 
 *         description: Fail to updated a LectureVideo
 */

router.put("/lecture-video/:id", editLectureVideo)

// -------------------Remove Lecture Video----------------------
/**
 * @swagger
 * /api/lecture-video/{id}:
 *   delete:
 *     summary: Remove a lecture video by id
 *     tags: [LectureVideos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Lecture Video id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LectureVideo'
 *     responses:
 *       200: 
 *         description: Lecture Video was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400:
 *         description: Fail to removed a LectureVideo
 */

router.delete("/lecture-video/:id", deleteLectureVideo)

export default router