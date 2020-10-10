import { toast } from "react-toastify";

/**
 * Function to toast API response messages
 * @param {response object} response
 */
export const notifyUser = (response) => {
  response.status
    ? toast.success(response.message)
    : toast.error(response.message);
};

/**
 * Function to search an array by a particular parameter
 * @param {array to search through} array
 * @param {key you want to search for} param
 * @param {value to compare with} value
 */
export const searchArrayByParam = (array, param, value) => {
  return (
    array &&
    array.length &&
    array.find((arrayItem) => arrayItem[param] === value)
  );
};

/**
 * Function to filter an array by a particular parameter
 * @param {array to search through} array
 * @param {key you want to search for} param
 * @param {value to compare with} value
 */
export const filterArrayByParam = (array, param, value) => {
  if (array.length === 0) {
    return [];
  }
  return (
    array &&
    array.length &&
    array.filter((arrayItem) => arrayItem[param] === value)
  );
};
