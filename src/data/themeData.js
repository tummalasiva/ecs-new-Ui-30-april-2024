import Theme1 from "../assets/images/theme1.png";
import Theme2 from "../assets/images/theme2.png";

const darkPalette = {
  primary: {
    main: "#196838", // Blue for light mode
  },
  secondary: {
    main: "#2c4c71", // Pink for light mode
  },
  mode: "dark",
};

const lightPalette = {
  primary: {
    main: "#196838", // Light Blue for dark mode
  },
  secondary: {
    main: "#446285", // Light Pink for dark mode
  },
  mode: "light",
};

const shapeProperties = {
  borderRadius: 5,
};

const websiteThemes = [
  {
    image: Theme1,
    theme: 1,
  },
  {
    image: Theme2,
    theme: 2,
  },
];

export default {
  lightPalette,
  darkPalette,
  shapeProperties,
  websiteThemes,
};
