import { Request, Response } from "express";
import { User } from "../models/User";

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

export const store = async (req: Request, res: Response) => {
  const { name, age } = req.body;

  const user: { name: string; age?: number } = {
    name,
  };

  if (age) user.age = age;

  await User.create(user);

  res.redirect("/");
};

export const increment = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) return res.redirect("/");
  user.age++;
  await user.save();

  return res.redirect("/");
};

export const decrement = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) return res.redirect("/");
  user.age--;
  await user.save();

  return res.redirect("/");
};

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  await user?.destroy();

  return res.redirect("/");
};
