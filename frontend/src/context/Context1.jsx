import { createContext, useState } from "react";

const Context1 = createContext();

function Provider1 (props) {
    const [isChecked1, setIsChecked1] = useState(false);
    return (
        <Context1.Provider value={[isChecked1, setIsChecked1]}>
            {props.children}
        </Context1.Provider>
    );
};

export {Provider1};
export default Context1;