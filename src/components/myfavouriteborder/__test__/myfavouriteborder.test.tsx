import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder"; // Importa tu componente MyFavouriteBorder

describe("MyFavouriteBorder component", () => {
    it("El icono se renderizarse correctamente", () => {
        render(<MyFavouriteBorder iconColor="blue" />);
        const iconButton = screen.getByRole("button");
        expect(iconButton).toBeInTheDocument();
    });
});