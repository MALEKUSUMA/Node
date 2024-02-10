import React ,{useState} from "react";
function Counter(){
    const [count,setCount]=useState(12);
    const ins=(amount)=>{
        setCount(count + amount);
    };
    
    return(
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <button style={{padding:20,backgroundColor:'lightblue',borderColor:'lightblue'}} onClick={() => ins(-1)}>-</button>
            <span style={{padding:20,backgroundColor:'lightblue',borderColor:'lightblue'}}>{count}</span>
            <button style={{padding:20,backgroundColor:'lightblue',borderColor:'lightblue'}}onClick={() => ins(1)}>+</button>
        </div>
    );
    


}
export default Counter;