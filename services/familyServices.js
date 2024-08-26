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

export const updateOne = async (id, newData) => {
  const family = await getAll();
  const index = family.findIndex((obj) => obj.id === id);

  if (index === -1) {
    throw new Error("Учасника з таким ID не знайдено");
  }

  const updatedMember = { ...family[index], ...newData };
  family[index] = updatedMember;

  await fs.writeFile(familyPath, JSON.stringify(family, null, 2));

  return updatedMember;
};

export const deleteById = async (id) => {
  const family = await getAll();
  const index = family.findIndex((obj) => obj.id === id);

  if (index === -1) {
    throw new Error("Учасника з таким ID не знайдено");
  }
  const [result] = family.splice(index, 1); //деструктуризація масиву, який ми отримали з методу splice(лише 1 елемент буде в масиві)
  console.log(result);
  await fs.writeFile(familyPath, JSON.stringify(family, null, 2));
  return result;
};
