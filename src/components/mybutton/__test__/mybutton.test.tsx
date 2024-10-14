import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyButton from "../mybutton"; // importo mi componente CustomButton

describe("MyButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyButton text='Hola' txtColor='white' bgColor='orange' width={100} hover="lightgray" bgHover="darkblue" borderColor="darkblue" />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});