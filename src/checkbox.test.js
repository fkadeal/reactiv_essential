import React from "react";
import { render,fireEvent } from "@testing-library/react";
import {Checkbox} from "./checkbox"

test("Selecting the checkbox", () => {
    const {getByLabelText} = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
})