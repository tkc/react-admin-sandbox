export const validateMessages = {
  inputRequired: () => "This field is required.",
  inputValidEmail: () => "Please enter a valid email address.",
  inputValidPassword: () => "Please enter 8-20 alphanumeric characters.",
  inputValidConfirmPassword: () => "Passwords do not match.",
  inputValidCSV: () => "Check the CSV file format.",
  maxLength: (num: number) => "Please enter within ${num} characters ",
};
