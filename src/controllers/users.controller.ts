import { Request, Response } from "express";
import prisma from "../prisma/client";

// Obtener todos
export const getUsers = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

// Crear
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({ data: { name, email } });
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
