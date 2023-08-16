import {Request, Response} from "express";
import {contractServiceService} from "../Services/contracService.service";
import {Service} from "../Models/services";
import {contracshasservices} from "../Models/contracsServices";


const contracServiceService = new contractServiceService()
export const getServiceContrac = async (req: Request, res: Response, next: any) => {
    const contracId = req.params.contracId;
    try {
        const contracService = await contracServiceService.findAllServiceContrac(contracId);
        res.json(contracService);
    } catch (error) {
        next(error);
    }
};

export const getServiceContracByTypeService = async (req: Request, res: Response, next: any) => {
    const contracId = req.params.contracId;
    const typeServiceId = req.params.typeServiceId;
    try {
        const contracService = await contracServiceService.findAllServiceContractTypeService(contracId, typeServiceId);
        res.json(contracService);
    } catch (error) {
        next(error);
        console.log(error)
    }
};

export const getServicesInfo = async (req: Request, res: Response, next: any) => {
    const contracId = req.params.contracId;
    try {
        const contracService = await contracServiceService.findAllServiceContracType(contracId);
        res.json(contracService);
    } catch (error) {
        console.log(error)
        next(error);
    }
};

export const PostService = async (req: Request, res: Response, next: any) => {
    const body = req.body
    const {typeServiceId} = req.body;
    const {contracId} = req.params;

    try {
        // Verificar si ya existe un servicio con el mismo tipo para este contrato
        const existingService = await Service.findOne({
            where: {typeServiceId}
        });

        if (existingService) {
            const existingContractService = await contracshasservices.findOne({
                where: {
                    serviceId: existingService.id,
                    contracId
                }
            });

            if (existingContractService) {
                return res.status(400).json({error: 'Este contrato ya tiene un servicio con este tipo de servicio.'});
            }
        }

        // Crear el nuevo servicio
        const newService = await Service.create(body);
        // Crear la entrada en ContratosHasService
        await contracshasservices.create({contracId, serviceId: newService.id});
        return res.status(201).json(newService);
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Error al crear el servicio.'});
    }
}

export const PutService = async (req: Request, res: Response, next: any) => {
    const body = req.body
    try {
        console.log(body)
        const serviceToUpdate = await Service.findByPk(body.id);
        if (!serviceToUpdate) {
            return res.status(404).json({error: 'El servicio no existe.'});
        }
        // Crear el nuevo servicio
        await serviceToUpdate.update(body);
        // Crear la entrada en ContratosHasService
        return res.status(201).json({message: 'Success'});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'Error al crear el servicio.'});
    }
}

export const DeleteService = async (req: Request, res: Response, next: any) => {
    const { serviceId } = req.params;
    try {
        // Verificar si el servicio existe
        const serviceToDelete = await Service.findByPk(serviceId);
        if (!serviceToDelete) {
            return res.status(404).json({ error: 'El servicio no existe.' });
        }

        // Eliminar la entrada en ContratosHasService
        await contracshasservices.destroy({ where: { serviceId } });

        // Eliminar el servicio
        await serviceToDelete.destroy();

        return res.status(200).json({ message: 'Servicio eliminado exitosamente.' });
    } catch (error) {
        console.error('Error al eliminar el servicio:', error);
        return res.status(500).json({ error: 'Error al eliminar el servicio.' });
    }
}
