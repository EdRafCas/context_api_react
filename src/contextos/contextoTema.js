import React,{useState} from 'react';

//this is how you create a context  Context = global state
const ContextoTema = React.createContext();



const ProveedorTema = ({children}) => {
      const [tema, cambiarTema] = useState(
            {
                  alineado: "left",
                  fuente: 20
            }
      );

      return (
            <ContextoTema.Provider value={{tema}}> 
                  {children}
            </ContextoTema.Provider>
      );
}
 
export {ContextoTema, ProveedorTema};