import { validatePaaword, messages } from "./validater";

test("should message false by password validator", () => {
  expect(validatePaaword("")).toEqual(messages.inputRequired());
});

test("should undefined true by password validator", () => {
  expect(validatePaaword("password")).toBeUndefined();
});
