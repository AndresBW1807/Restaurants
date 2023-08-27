"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheklistService = void 0;
const checklist_1 = require("../Models/checklist");
const user_1 = require("../Models/user");
const campusCourses_1 = require("../Models/campusCourses");
const services_1 = require("../Models/services");
class CheklistService {
    postAssistance(Assitance) {
        return __awaiter(this, void 0, void 0, function* () {
            const assistance = yield checklist_1.CheckList.create(Assitance);
            yield assistance.save();
            return assistance;
        });
    }
    getGraphTwo(campusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checklistData = yield checklist_1.CheckList.findAll({
                    where: {
                        assistance: true,
                    },
                    include: [
                        {
                            model: user_1.User,
                            attributes: ['id'],
                            include: [
                                {
                                    model: campusCourses_1.campushascourses,
                                    attributes: [],
                                    where: {
                                        campusId: campusId,
                                    },
                                },
                            ],
                        },
                        {
                            model: services_1.Service,
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
            }
            catch (error) {
                console.error('Error al obtener los datos:', error);
                throw error;
            }
        });
    }
}
exports.CheklistService = CheklistService;
