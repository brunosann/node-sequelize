import { Request, Response } from "express";
import { Op } from "sequelize";

import { Product } from "../models/Product";
import { User } from "../models/User";

export const home = async (req: Request, res: Response) => {
  const users = await User.findAll({
    where: {
      // age: {
      //   // [Op.gt]: 20, // >
      //   [Op.gte]: 18, // >=
      //   // [Op.lt]: 40, // <
      //   // [Op.lte]: 40, // <=
      //   // [Op.notBetween]: [20, 90],
      //   // [Op.between]: [20, 90],
      //   // [Op.notIn]: [1, 20, 30],
      //   // [Op.in]: [1, 20, 30],
      // },
      // name: {
      //   [Op.like]: "%br%",
      // },
    },
    // order: [
    //   ["name", "DESC"],
    //   ["age", "ASC"],
    // ],
    // limit: 2,
    // offset: 2,
  });

  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users,
  });
};
