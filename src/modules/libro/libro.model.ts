import { ObjectId } from "mongodb";

export interface Libro {
    _id?: ObjectId;
    titulo: string;
    autor: string;
    paginas: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface LibroDTO {
    titulo?: string;
    autor?: string;
    paginas?: number;
}