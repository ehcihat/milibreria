import { MouseEventHandler } from 'react';
export interface MyFavouriteBorderProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavouriteBorder({ iconColor, disabled, onClick }: MyFavouriteBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavouriteBorder;
