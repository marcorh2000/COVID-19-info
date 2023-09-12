import { userLocale } from "./constants";

function getRGBA({ rgb, alpha }) {
  const rgbaColor = `rgba(${rgb.join(",")}, ${alpha})`;
  return rgbaColor;
}

const dateFormatOptions = { year: "numeric", month: "long", day: "numeric" };
const formatDate = (date, options = dateFormatOptions) =>
  date.toLocaleDateString(userLocale, options);

const formatNumberThreeSignificantDigits = (number) => {
  return new Intl.NumberFormat(userLocale).format(number);
};

export { getRGBA, formatDate, formatNumberThreeSignificantDigits };
