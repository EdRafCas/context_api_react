import React from 'react';

//this is how you create a context  Context = global state
const ContextoTema = React.createContext();

const ProveedorTema = ({children}) => {
      return (
            <ContextoTema.Provider value={{nombre:"Eduardo"}}> 
                  {children}
            </ContextoTema.Provider>
      );
}
 
export {ContextoTema, ProveedorTema};