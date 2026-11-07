import { Request, Response } from "express";
import { LibroService } from "./libro.service";

export class LibroController {

    private readonly libroService = new LibroService();

    create = async (req: Request, res: Response): Promise<void> => {
        const libro = await this.libroService.create(req.body);
        res.status(201).json(libro);
    };

    findAll = async (_req: Request, res: Response): Promise<void> => {
        const libros = await this.libroService.findAll();
        res.status(200).json(libros);
    };

    findById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
        const libro = await this.libroService.findById(req.params.id);
        res.status(200).json(libro);
    };

    update = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
        const libro = await this.libroService.update(req.params.id, req.body);
        res.status(200).json(libro);
    };

    delete = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
        await this.libroService.delete(req.params.id);
        res.status(204).send();
    };
}