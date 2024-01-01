import React from 'react';
import preop from "./preop.json"
import otf_por_unbiased from "./otf_por_unbiased.json"
import './PreopOtfporunbiased.css'
import buttons70_110 from "./buttons70_110.json"
import { ButtonClick70x100 } from './ButtonClick70x100';
import SaveState2 from './SaveState2'

export const PreopOtfporunbiased = () => {
  const [buttonActiveStates, setButtonActiveStates] = React.useState({});
  const toggleButtonActive = (id) => {
    setButtonActiveStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };
  return (
   <>
   <div className='gapFill2'></div>
     <div className='colLabels2'>
     <div className='otfporunbiased'>
     Intra-operative Actions
        </div>
        
      {
             otf_por_unbiased.map((otf,i)=>( 
              <div className="cols2">{otf.Parameters_Subparameter_Criteria}</div>
      ))
          }
     </div>
     <div className='preopdata2'>
     Pre-operative parameters
      </div>
      <div className='flex'>
      <div className='rowLabels2'>
          {
             preop.map((preop,i)=>( 
              <p className="rows2">{preop['Parameter_Sub parameter_ Citeria']}</p>
      ))
    }
        </div>
    <div className='grid-container2'>
    {buttons70_110.map((data, i) => (
    <div className='grid-item2' key={i}> 
      <ButtonClick70x100 id={`${i+1}`} 
      active={buttonActiveStates[`${i+1}`] || false}
     toggleActive={() => toggleButtonActive(`${i+1}`)}/> 
    </div>
  ))}
    </div>
      </div>
      <div className='downloadButton2'>
    <SaveState2/>
   </div>
     </>
  )
}

export default PreopOtfporunbiased;
