import { createContext, useState } from "react";

const Context5 = createContext();

function Provider5 ( props) {
    const [ mode, setMode] = useState("Auto");
    return (
        <Context5.Provider value={ [ mode, setMode]}>
            { props.children}
        </Context5.Provider>
    );
};
export { Provider5};
export default Context5;