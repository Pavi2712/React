import React from "react";
// import Counter from './concepts/myComponent'
// import PropDrilling from "./concepts/propDrilling";
import {Parent} from "./concepts/contextAPI";
import { UserContext } from "./concepts/myComponent";

function App(){
  const userName = "Pavi"
  return(
   <UserContext.Provider value = {userName}>
    <Parent />
   </UserContext.Provider>
  )
}
export default App;