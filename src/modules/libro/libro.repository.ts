import { getDb } from "../../config/database";
import { Libro } from "./libro.model";
import { Collection, ObjectId } from "mongodb";

export class LibroRepository {

    private collection(): Collection<Libro> {
        return getDb().collection<Libro>("libros");
    }

    async create(data: Omit<Libro, "_id">): Promise<Libro> {
        const result = await this.collection().insertOne(data as Libro);
        return { _id: result.insertedId, ...data };
    }

    async findAll(): Promise<Libro[]> {
        return this.collection().find().sort({ createdAt: -1 }).toArray();
    }

    async findById(id: ObjectId): Promise<Libro | null> {
        return this.collection().findOne({ _id: id });
    }

    async update(id: ObjectId, changes: Partial<Libro>): Promise<Libro | null> {
        const result = await this.collection().findOneAndUpdate(
            { _id: id },
            { $set: changes },
            { returnDocument: "after" }
        );
        return result ?? null;
    }

    async delete(id: ObjectId): Promise<boolean> {
        const result = await this.collection().deleteOne({ _id: id });
        return result.deletedCount === 1;
    }
}