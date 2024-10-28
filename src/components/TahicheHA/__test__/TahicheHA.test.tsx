import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TahicheHA from "../tahicheha"; // Importa tu componente TahicheHA

describe("TahicheHA component", () => {
    it("El icono se renderiza correctamente", () => {
        render(<TahicheHA iconColor="blue" tooltipText="Compartir" />);
        const iconButton = screen.getByRole("button");
        expect(iconButton).toBeInTheDocument();
    });
});
