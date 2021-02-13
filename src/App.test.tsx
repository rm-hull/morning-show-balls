import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("should not fail", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/websites/i);
  expect(linkElement).toBeInTheDocument();
});
