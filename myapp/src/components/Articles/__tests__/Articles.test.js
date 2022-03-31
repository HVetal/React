import React from "react";
import { render, screen } from "@testing-library/react";
import { Articles } from "../Articles";

describe.skip("Message tests", () =>{
    it("render author & text", () => {
        render(<Articles />);

        const text = screen.findAllByText("title");
        expect(text).toBeDefined();
    });
});