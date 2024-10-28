import { MouseEventHandler } from 'react';
export interface TahicheHAProps {
    iconColor: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    tooltipText?: string;
    size?: 'small' | 'medium' | 'large';
    backgroundColor?: string;
    iconSize?: number;
}
declare function TahicheHA({ iconColor, disabled, onClick, tooltipText, size, backgroundColor, iconSize, }: TahicheHAProps): import("react/jsx-runtime").JSX.Element;
export default TahicheHA;
