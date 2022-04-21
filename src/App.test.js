import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("render an h1 correctly", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello React Testing library/);
    expect(h1).toHaveTextContent("Hello React Testing library");
});