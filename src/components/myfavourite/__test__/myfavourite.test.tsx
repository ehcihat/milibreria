import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite"; // Importa tu componente MyFavourite

describe("MyFavourite component", () => {
    it("El icono se renderizarse correctamente", () => {
        render(<MyFavourite iconColor="red" />);
        const iconButton = screen.getByRole("button");
        expect(iconButton).toBeInTheDocument();
    });
});