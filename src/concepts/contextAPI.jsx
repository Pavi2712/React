import { useContext } from "react";
import { UserContext } from "./myComponent";

function GrandChild(){
    const userName = useContext(UserContext);
    return(
            <p>Hello..........{userName}</p>
    )
}
export default GrandChild;