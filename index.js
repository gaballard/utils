import { readFileSync } from 'fs';

/**
 * Populates environment variables from a `.env` file.
 */
export const dotenv = () => {
  const contents = readFileSync(`${process.cwd()}/.env`).toString();
  contents.split('\n').forEach((keyValue) => {
    const [key, value] = keyValue.split('=');
    process.env[key.trim()] = value.trim();
  });
};

/**
 * Converts a string to JSON, returning `undefined` instead of throwing an error if string is not valid JSON.
 * @param {string} input
 * @returns JSON object
 */
export const toJSON = (input) => {
  try {
    return JSON.parse(input);
  } catch (_) {
    return;
  }
};

/**
 * Capitalizes a string.
 * @param {string} input
 * @returns Capitalized string
 */
export const capitalize = (input) => {
  const words = input.split(' ');
  return words.length === 1
    ? input[0].toUpperCase() + input.slice(1)
    : words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

/**
 * Converts snake_case to camelCase.
 * @param {string} snakeCase
 * @returns Camel case string
 */
export const snakeToCamelCase = (snakeCase) => {
  const words = snakeCase.split('_');
  if (!words.length) return '';
  if (words.length === 1) return words[0];
  let camelCase = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCase += capitalize(words[i]);
  }
  return camelCase;
};

/**
 * Converts a string to snake_case.
 * @param input
 * @returns Snake case string
 */
export const toSnakeCase = (input) => input.toLowerCase().replace(' ', '_');

/**
 * Strips special characters from a string.
 * @param {string} input
 * @returns Sanitized string
 */
export const sanitizeString = (input) =>
  input.replace(/[-\\^$*+?.()|[\]{}]/g, '');
