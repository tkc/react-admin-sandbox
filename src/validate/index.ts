import { validateMessages } from "./messages";

export const isValidAlphaNumeric = (val: string) => /^[a-zA-Z0-9_+-]{1,40}$/i.test(val);
export const isValidEmail = (val: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
export const isValidPassword = (val: string) => /^[A-Z0-9._%+-]{8,20}$/i.test(val);
// export const isValidExel = (val: string) => /^.*\.(csv|CSV)$/i.test(val);

// export const validateExel = (content: string): { file: string | null } => {
//   if (!content) {
//     return { file: validateMessages.inputRequired() };
//   } else if (content && !isValidCsv(content)) {
//     return { file: validateMessages.inputValidCSV() };
//   }
//   return { file: null };
// };

export const validateEmail = (email: string): { email: string | null } => {
  if (!email) {
    return { email: validateMessages.inputRequired() };
  } else if (email && !isValidEmail(email)) {
    return { email: validateMessages.inputValidEmail() };
  }
  return { email: null };
};

export const validateUserName = (user_name: string): { user_name: string | null } => {
  if (!user_name) {
    return { user_name: validateMessages.inputRequired() };
  }
  return { user_name: null };
};

export const validatePassword = (password: string): { password: string | null } => {
  if (!password) {
    return { password: validateMessages.inputRequired() };
  } else if (password && !isValidPassword(password)) {
    return { password: validateMessages.inputValidPassword() };
  }
  return { password: null };
};

export const composeValidateErrors = (errors: { [key: string]: string | null }) => {
  return Object.keys(errors).some(k => !!(errors && typeof errors[k] !== "undefined" && errors[k] !== null))
    ? errors
    : {};
};
