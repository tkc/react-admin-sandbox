import { validatePaaword, validateSimplaInput, messages } from "./validater";

test("should message by input validator", () => {
  const validateSimplaInputIns = validateSimplaInput(1);
  expect(validateSimplaInputIns("test")).toEqual("1文字以内で入力してください。");
});

test("should message false by password validator", () => {
  const validatePaawordIns = validatePaaword();
  expect(validatePaawordIns("")).toEqual(messages.inputRequired());
});

test("should undefined true by password validator", () => {
  const validatePaawordIns = validatePaaword();
  expect(validatePaawordIns("password")).toBeUndefined();
});
