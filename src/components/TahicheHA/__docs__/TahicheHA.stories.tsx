import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importa el componente Example para TahicheHA

const meta: Meta<typeof Example> = {
    title: "TahicheHA",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Storybook de ejemplo con el icono en color azul.
export const Default: Story = {
    args: {
        iconColor: "blue",
        disabled: false,
        onClick: () => alert("TahicheHA activado"),
        tooltipText: "Compartir",
        size: "medium",
        backgroundColor: "white",
        iconSize: 24,
    },
};

// Storybook de ejemplo con el icono deshabilitado y en color gris
export const Disabled: Story = {
    args: {
        iconColor: "grey",
        disabled: true,
        tooltipText: "No disponible",
    },
};

// Storybook de ejemplo con el icono en otro color
export const GreenIcon: Story = {
    args: {
        iconColor: "green",
        disabled: false,
        onClick: () => alert("TahicheHA en verde"),
        tooltipText: "Compartir",
        size: "medium",
        backgroundColor: "white",
        iconSize: 24,
    },
};
