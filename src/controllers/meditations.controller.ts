import { Request, Response } from "express";
import prisma from "../prisma/client";

// Obtener todas las meditaciones
export const getMeditations = async (_: Request, res: Response) => {
  const meditations = await prisma.meditation.findMany({
    include: { book: true },
  });
  res.json(meditations);
};

// Crear meditación
export const createMeditation = async (req: Request, res: Response) => {
  const { title, description, audioUrl, bookId } = req.body;
  try {
    const meditation = await prisma.meditation.create({
      data: { title, description, audioUrl, bookId },
    });
    res.json(meditation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
