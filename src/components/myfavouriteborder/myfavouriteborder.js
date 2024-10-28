import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavouriteBorder(_a) {
    var iconColor = _a.iconColor, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onClick = _a.onClick;
    return (_jsx(IconButton, { onClick: onClick, disabled: disabled, sx: { color: iconColor }, children: _jsx(FavoriteBorderIcon, {}) }));
}
export default MyFavouriteBorder;
