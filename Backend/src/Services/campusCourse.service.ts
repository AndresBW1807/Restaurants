import {campushascourses} from "../Models/campusCourses";
import {Course} from "../Models/courses";

export class CampusCourseService {
    async findAllCampusCourse(campusId: string) {
        const campusCourse = campushascourses.findAll({
            where: {campusId},
            include: [
                {
                    model: Course,
                    attributes: ['nomenclature']
                }
            ],
            attributes: ['id']
        })
        return campusCourse
    }
}