import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyButton",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        text: "Button primary",
        txtColor: 'black',
        bgColor: 'red',
        disabled: false,
        hover: "lightgray",
        bgHover: "darkblue",
        width: 100,
        borderColor: "darkblue",
        size: "small",
        onClick: () => alert("Button Primary"),
    },
};
export const Secondary: Story = {
    args: {
        text: "Button secondary",
        txtColor: 'white',
        bgColor: 'yellow',
        disabled: false,
        hover: "darkblue",
        bgHover: "red",
        width: 100,
        borderColor: "orange",
        size: "small",
        onClick: () => alert("Button Primary"),
    },
};
