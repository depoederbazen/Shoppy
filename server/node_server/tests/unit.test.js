// Libraries
const moment = require("moment");

// Utitlity Functions
const { getCurrentDateTime } = require("../utils/");

const currentDate = moment().format("YYYY-MM-DD");
const currenttime = moment().format("HH:mm:ss");

// Test suite 1 - contains 3 test cases
describe("Testing getCurrentDateTime utility funtion", () => {
  it("Test 1: funtion should return current date", () => {
    expect(getCurrentDateTime("date")).toBe(currentDate);
  });

  test("Test 2: funtion should return current time", () => {
    expect(getCurrentDateTime("time")).toBe(currenttime);
  });

  test("Test 3: funtion should return null", () => {
    expect(getCurrentDateTime()).toBeNull();
  });
});
