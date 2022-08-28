"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = (0, react_1.useState)(window.location.pathname);
    (0, react_1.useEffect)(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);
    return (currentPath === path ? children : null);
};
exports.default = Route;
