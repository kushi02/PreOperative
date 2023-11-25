import React from 'react'
import './ButtonStyles.css'

export var arr=new Array(3010).fill(0);
export const ButtonClick70x43 = ({ id,active,toggleActive  }) => {
  
  const handleClick = () => {
        toggleActive();
        if(active)
        {
          arr[id-1]=0;
        }
        else{
          arr[id-1]=1;
        }
      };
     
  return (
    <button
    className='buttons'
    onClick={handleClick}
    
    style={{ backgroundColor: active ? "rgb(255, 176, 0)" : "silver" }}
  >
  </button>
  )
}


