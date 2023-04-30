import { Request, Response } from "express";
import {CoursesService} from "../Services/courses.service";


const courseService = new CoursesService();

export const getAllCourse = async (req: Request, res: Response, next: any) => {
    try {
        const course = await courseService.findAll()
        res.json(course);
    } catch (error) {
        next(error);
    }
};