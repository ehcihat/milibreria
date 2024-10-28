import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importa el componente Example para MyFavourite

const meta: Meta<typeof Example> = {
    title: "MyFavourite",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Storybook de ejemplo con el icono en color rojo
export const Default: Story = {
    args: {
        iconColor: "red",
        disabled: false,
        onClick: () => alert("MyFavourite activado"),
    },
};

// Storybook de ejemplo con el icono deshabilitado y en color gris
export const Disabled: Story = {
    args: {
        iconColor: "grey",
        disabled: true,
    },
};

// Storybook de ejemplo con el icono en otro color
export const GreenIcon: Story = {
    args: {
        iconColor: "green",
        disabled: false,
        onClick: () => alert("MyFavourite en verde"),
    },
};
