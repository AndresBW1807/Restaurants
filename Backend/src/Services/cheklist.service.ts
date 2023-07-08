import {CheckList} from "../Models/checklist";

export class CheklistService {
    async postAssistance(Assitance: any) {
        const assistance = await CheckList.create(Assitance);
        await assistance.save();
        return assistance
    }
}