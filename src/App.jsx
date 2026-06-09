import React from "react";
// import Counter from './concepts/myComponent'
// import PropDrilling from "./concepts/propDrilling";
import GrandChild from "./concepts/contextAPI";
import { UserContext } from "./concepts/myComponent";

function App(){
  const userName = "Pavi"
  return(
   <UserContext.Provider value = {userName}>
    <GrandChild />
   </UserContext.Provider>
  )
}
export default App;