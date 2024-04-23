import React, {useEffect, useState } from 'react'

const Apps =()=>{

const [num,SetNum]=useState(0);
useEffect(()=>{
    document.title=`You have clicked ${num} times`;

})
return(
    <>
    <div>
        <button onClick={()=>{
            SetNum(num+1)

        }}>Click me {num} </button>
    </div>
    </>
)
}
export default Apps;