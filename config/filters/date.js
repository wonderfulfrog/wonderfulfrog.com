import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

dayjs.extend(utc);
dayjs.extend(advancedFormat);

const formatDate = (date, format) => dayjs.utc(date).format(format);
const formatAsUTCString = (date) => new Date(date).toUTCString();

export default {
  formatDate,
  formatAsUTCString,
};
