import { MouseEventHandler } from 'react';
export interface MyButtonProps {
    text: string;
    txtColor: string;
    bgColor: string;
    borderColor: string;
    width: number;
    size?: "small" | "medium" | "large";
    hover: string;
    bgHover: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyButton(props: MyButtonProps): import("react/jsx-runtime").JSX.Element;
export default MyButton;
