import React from 'react'
import preop from "./preop.json"
import otfunbiased from "./otfunbiased.json"
import './PreopOtfunbiased.css'
import './ButtonClick70x43'
import buttons70_43 from "./buttons70_43.json"
import { ButtonClick70x43 } from './ButtonClick70x43'
import SaveState1 from './SaveState1'

export const PreopOtfunbiased = () => {
  const [buttonActiveStates, setButtonActiveStates] = React.useState({});
  const toggleButtonActive = (id) => {
    setButtonActiveStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };
  return (
   <>
   <div className='gapFill'></div>
   <div className='colLabels'>
      <div className='otfunbiased'>Intra-operative Actions</div>
   {
    otfunbiased.map((otfunbiased,i)=>(
      <div className="cols">{otfunbiased.Parameters_Subparameter_Criteria}</div>
     
    )
    )
   }
   </div>
   <div className='preopdata'>
        Pre-operative parameters
      </div>
   <div className='flex'>
    <div className='rowLabels'>
      {
         preop.map((preop,i)=>( 
          <p id={`row-${i + 1}`} className='rows'>{preop['Parameter_Sub parameter_ Citeria']}</p>
          ))
      }
    </div>
    <div className='grid-container'>
    {buttons70_43.map((data, i) => (
    <div className='grid-item'  key={i}> 
      <ButtonClick70x43 id={`${i+1}`} 
      active={buttonActiveStates[`${i+1}`] || false}
      toggleActive={() => toggleButtonActive(`${i+1}`)}/> 
    </div>
  ))}
    </div>
   </div>
   <div className='downloadButton'>
    <SaveState1/>
   </div>
    </>
  )
}

export default PreopOtfunbiased
