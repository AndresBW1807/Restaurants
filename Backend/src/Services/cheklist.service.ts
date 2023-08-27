import {CheckList} from "../Models/checklist";
import {Sequelize} from "sequelize";
import {Campus} from "../Models/campus";
import {User} from "../Models/user";
import {campushascourses} from "../Models/campusCourses";
import {Service} from "../Models/services";

export class CheklistService {
    async postAssistance(Assitance: any) {
        const assistance = await CheckList.create(Assitance);
        await assistance.save();
        return assistance
    }

    async getGraphTwo(campusId: string) {
        try {
            const checklistData = await CheckList.findAll({
                where: {
                    assistance: true,
                },
                include: [
                    {
                        model: User,
                        attributes: ['id'],
                        include: [
                            {
                                model: campushascourses,
                                attributes: [],
                                where: {
                                    campusId: campusId,
                                },
                            },
                        ],
                    },
                    {
                        model: Service,
                        attributes: ['typeServiceId']
                    },
                ],
            });

            // Filtrar los objetos con user null
            const filteredChecklistData = checklistData.filter(item => item.user !== null);

            // Objeto para almacenar los datos agrupados por año
            const groupedData = {};

            // Agrupar los resultados por año
            filteredChecklistData.forEach(item => {
                const year = new Date(item.createdAt).getFullYear();
                // @ts-ignore
                if (!groupedData[year]) {
                    // @ts-ignore
                    groupedData[year] = [];
                }
                // @ts-ignore
                groupedData[year].push(item);
            });

            return groupedData;
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            throw error;
        }
    }
}





