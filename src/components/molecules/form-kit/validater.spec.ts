import { validatePaaword, messages } from "./validater";

test("should message false by password validator", () => {
  const validatePaawordIns = validatePaaword();
  expect(validatePaawordIns("")).toEqual(messages.inputRequired());
});

test("should undefined true by password validator", () => {
  const validatePaawordIns = validatePaaword();
  expect(validatePaawordIns("password")).toBeUndefined();
});
