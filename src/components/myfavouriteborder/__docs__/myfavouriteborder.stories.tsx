import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; // Importa el componente Example para MyFavouriteBorder

const meta: Meta<typeof Example> = {
    title: "MyFavouriteBorder",
    component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

// Storybook de ejemplo con el icono en color azul.
export const Default: Story = {
    args: {
        iconColor: "blue",
        disabled: false,
        onClick: () => alert("MyFavouriteBorder activado"),
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
        onClick: () => alert("MyFavouriteBorder en verde"),
    },
};
