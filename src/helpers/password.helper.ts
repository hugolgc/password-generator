import { LOWERCASES } from "../mocks/lowercases";
import { UPPERCASES } from "../mocks/uppercases";
import { SPECIALS } from "../mocks/specials";
import { NUMBERS } from "../mocks/numbers";
import type { Generate } from "../interfaces/generate.interface";

export const passwordHelper = {
  generate({
    lowercases,
    uppercases,
    specials,
    numbers,
    length,
    update,
  }: Generate): string {
    let characters: string[] = [];
    if (lowercases) characters = [...characters, ...LOWERCASES];
    if (uppercases) characters = [...characters, ...UPPERCASES];
    if (specials) characters = [...characters, ...SPECIALS];
    if (numbers) characters = [...characters, ...NUMBERS];

    characters.sort(() => 0.5 - Math.random());
    return characters.slice(0, length).join("");
  },
};
