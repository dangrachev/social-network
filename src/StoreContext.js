import React from "react";

const StoreContext = React.createContext(null);

// Возможно нужно будет инкапсулировать StoreContext.Provider в отдельную компоненту здесь
// В index.js App будет обернута уже в Provider с пропсом store
/*const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
}*/

