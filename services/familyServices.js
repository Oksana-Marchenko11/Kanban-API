import path from "path";
import fs from "fs/promises";
import { nanoid } from "nanoid";

const familyPath = path.resolve("data", "myFamilyData.json");

export const getAll = async () => {
  const data = await fs.readFile(familyPath, "utf-8");
  return JSON.parse(data) || [];
};
export const getById = async (id) => {
  const data = await fs.readFile(familyPath, "utf-8");
  const result = JSON.parse(data);
  const x = result.find((obj) => obj.id === id);
  console.log(x);
  return x;
};
export const postOne = async (data) => {
  const family = await getAll();
  const newMember = {
    id: nanoid(),
    ...data,
  };
  family.push(newMember);
  await fs.writeFile(familyPath, JSON.stringify(family, null, 2));
  return newMember;
};
