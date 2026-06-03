import React, { useState, useEffect } from "react";

function Counter(props) {
     const [count, setCount] = useState(0);
     const items = ['Pavi', 'Pintuu', 'Azhagi'];
     const [data, setData] = useState("Loading...");
     const [isLoading, setIsLoading] = useState(true);
     const familyList = items.map((name, index) => name.includes("i") ? <p key={index}>{index}:{name}</p> : null);
     useEffect(() => {
          setTimeout(() => {
               setData("Data Loaded Successfully");
               setIsLoading(false);
          }, 4000);
     }, []);

     return (
          <div>
               {isLoading ? <h2>{data}</h2> : (<>
                    {/* prop example */}
                    <h1>{data}</h1>
                    <h2>Welcome {props.name}!</h2>
                    {/* state variable example */}
                    <button onClick={() => setCount(count + 1)}>Click to show ur family list</button>
                    <button>{count}</button>
                    {/* Conditional Rendering in Lists */}
                    {count == 4 ? <h2>Our Family List {familyList}</h2> : null} </>)}
          </div>
     );
}
export default Counter;