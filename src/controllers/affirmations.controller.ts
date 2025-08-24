import { Request, Response } from "express";
import prisma from "../client";

// Obtener todas las afirmaciones
export const getAffirmations = async (_: Request, res: Response) => {
  const affirmations = await prisma.affirmation.findMany({
    include: { book: true },
  });
  res.json(affirmations);
};

// Crear afirmación
export const createAffirmation = async (req: Request, res: Response) => {
  const { text, bookId } = req.body;
  try {
    const affirmation = await prisma.affirmation.create({
      data: { text, bookId },
    });
    res.json(affirmation);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
