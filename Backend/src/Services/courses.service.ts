import {Course} from "../Models/courses";


export class CoursesService {
    async findAll(){
        const course = Course.findAll()
        return course
    }
}