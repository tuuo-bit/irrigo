import { createContext, useState } from "react";

const Context2 = createContext();

function Provider2 (props) {
    const [isChecked2, setIsChecked2] = useState(false);
    return (
        <Context2.Provider value={[isChecked2, setIsChecked2]}>
            {props.children}
        </Context2.Provider>
    );
};

export {Provider2};
export default Context2;