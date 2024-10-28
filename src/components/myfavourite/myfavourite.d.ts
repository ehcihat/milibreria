import { MouseEventHandler } from 'react';
export interface MyFavouriteProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavourite({ iconColor, disabled, onClick }: MyFavouriteProps): import("react/jsx-runtime").JSX.Element;
export default MyFavourite;
