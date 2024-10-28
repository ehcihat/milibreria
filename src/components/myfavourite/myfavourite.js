import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
//Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavourite(_a) {
    var iconColor = _a.iconColor, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onClick = _a.onClick;
    return (_jsx(IconButton, { onClick: onClick, disabled: disabled, sx: { color: iconColor }, children: _jsx(FavoriteIcon, {}) }));
}
export default MyFavourite;
