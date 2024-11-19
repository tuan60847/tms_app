import twColors from "tailwindcss/colors";
import { create, TwConfig } from "twrnc";

import tailwindConfig from "../../tailwind.config";

/**
 * Customize twrnc using `tailwind.config.js`
 */
const tw = create(tailwindConfig as TwConfig);

/**
 * Tailwind style for React Native
 */
export const clsx = tw.style;

/**
 * Tailwind Colors
 * @see https://tailwindcss.com/docs/customizing-colors
 */
export const colors = twColors;

export default tw;
