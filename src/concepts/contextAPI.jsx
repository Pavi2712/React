import { useContext } from "react";
import { UserContext } from "./myComponent";

export const Parent = () =>{
    return(
        <GrandChild />
    )
}

export const GrandChild =()=>{
    const userName = useContext(UserContext);
    return(
            <p>Hii{userName}</p>
    )
}