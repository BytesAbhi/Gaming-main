import { createContext,useContext,useState } from "react";

export const UserContext = createContext({});


const ContextDemo = (props) => {
    const[hideData,setHideData] = useState(null);
  return (
    <UserContext.Provider value={{hideData,setHideData}}>
      {props.children}
    </UserContext.Provider>
  )
}
export const GetCtx = () => {
    return useContext(UserContext);
}


export default ContextDemo
