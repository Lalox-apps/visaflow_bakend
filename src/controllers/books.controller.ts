import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getBooks = async (_: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.json(books);
};

export const createBook = async (req: Request, res: Response) => {
  const { title, author } = req.body;
  try {
    const book = await prisma.book.create({ data: { title, author } });
    res.json(book);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
