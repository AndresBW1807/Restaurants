import { Request, Response } from "express";
import {CampusCourseService} from "../Services/campusCourse.service";


const campusCourseService = new CampusCourseService()
export const getCampusCourse = async (req: Request, res: Response, next: any) => {
    const campusId = req.params.campusId;
    try {
        const campusCourse = await campusCourseService.findAllCampusCourse(campusId);
        res.json(campusCourse);
    } catch (error) {
        next(error);
    }
};