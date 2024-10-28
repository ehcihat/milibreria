import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
function TahicheHA(_a) {
    var iconColor = _a.iconColor, _b = _a.disabled, disabled = _b === void 0 ? false : _b, onClick = _a.onClick, _c = _a.tooltipText, tooltipText = _c === void 0 ? 'Compartir' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, backgroundColor = _a.backgroundColor, iconSize = _a.iconSize;
    return (_jsx(Tooltip, { title: tooltipText, children: _jsx(IconButton, { onClick: onClick, disabled: disabled, size: size, sx: { color: iconColor, backgroundColor: backgroundColor }, children: _jsx(ShareIcon, { sx: { fontSize: iconSize } }) }) }));
}
export default TahicheHA;
