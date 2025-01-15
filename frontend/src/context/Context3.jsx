import { createContext, useState } from "react";

const Context3 = createContext();

function Provider3 (props) {
    const [isChecked3, setIsChecked3] = useState(false);
    return (
        <Context3.Provider value={[isChecked3, setIsChecked3]}>
            {props.children}
        </Context3.Provider>
    );
};

export {Provider3};
export default Context3;