export const messages = {
  inputRequired: () => "必須入力です。",
  inputValidEmail: () => "メールアドレスの形式が違います。",
  inputValidPassword: () => "Please enter 8-20 alphanumeric characters.",
  inputValidConfirmPassword: () => "Passwords do not match.",
  maxLength: (num: number) => `${num}文字以内で入力してください。`,
};

const isValidAlphaNumeric = (val: string) => /^[a-zA-Z0-9_+-]{1,40}$/i.test(val);
const isValidEmail = (val: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isValidPassword = (val: string) => /^[A-Z0-9._%+-]{8,20}$/i.test(val);

export function validateSimplaInput(max: number): (value: string) => string | undefined {
  return (value: string): string | undefined => {
    if (!value) {
      return messages.inputRequired();
    } else if (value.length > max) {
      return messages.maxLength(max);
    }
    return undefined;
  };
}

export function validateEmail(): (value: string) => string | undefined {
  return (value: string): string | undefined => {
    if (!value) {
      return messages.inputRequired();
    } else if (value && !isValidEmail(value)) {
      return messages.inputValidEmail();
    }
    return undefined;
  };
}

export function validatePaaword(): (value: string) => string | undefined {
  return (value: string): string | undefined => {
    if (!value) {
      return messages.inputRequired();
    }
    return undefined;
  };
}
