import React from 'react'
import './ButtonStyles.css'

export var arr2=new Array(7700).fill(0);
export const ButtonClick70x100 = ({ id,active,toggleActive  }) => {
    const handleClick = () => {
        toggleActive();
        if(active)
        {
          arr2[id-1]=0;
        }
        else{
          arr2[id-1]=1;
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

