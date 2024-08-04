import path from "path";
import fs from "fs/promises";

const familyPath = path.resolve("data", "myFamilyData.json");

export const getAll = async () => {
  const data = await fs.readFile(familyPath, "utf-8");
  return JSON.parse(data);
};
