import { isValidPassword } from ".";

test("should return false by password validator", () => {
  expect(!isValidPassword("ああああああ")).toBeTruthy();
  expect(!isValidPassword("11111")).toBeTruthy();
  expect(!isValidPassword("aaaaa")).toBeTruthy();
  expect(!isValidPassword("&&&&&&")).toBeTruthy();
});

test("should return true by password validator", () => {
  expect(isValidPassword("aaaaaaaaa")).toBeTruthy();
  expect(isValidPassword("11111111")).toBeTruthy();
  expect(isValidPassword("._%+-1111")).toBeTruthy();
});

// test("should return true by csv validator", () => {
//   expect(isValidCsv("test.csv")).toBeTruthy();
//   expect(isValidCsv("テスト.csv")).toBeTruthy();
//   expect(isValidCsv("テスト-2019年1月1日.csv")).toBeTruthy();
//   expect(isValidCsv("test.CSV")).toBeTruthy();
//   expect(isValidCsv("テスト.CSV")).toBeTruthy();
//   expect(isValidCsv("テスト-2019年1月-1日.CSV")).toBeTruthy();
// });

// test("should return false by csv validator", () => {
//   expect(isValidCsv("test.text")).toBeFalsy();
//   expect(isValidCsv("テスト.pdf")).toBeFalsy();
//   expect(isValidCsv("テスト-2019年1月-1日.xml")).toBeFalsy();
// });
