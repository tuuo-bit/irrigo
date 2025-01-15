import { createContext, useState } from "react";

const Context4 = createContext();

function Provider4 (props) {
    const [ crop, setCrop] = useState("None");
    return (
        <Context4.Provider value={[crop, setCrop]}>
            {props.children}
        </Context4.Provider>
    );
};
export {Provider4};
export default Context4;