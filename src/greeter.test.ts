import { Greeter } from "./greeter";

test("test", () => {
  const greeter = new Greeter("Taro");
  expect(greeter.getMessage()).toBe("Hello Taro");
});
