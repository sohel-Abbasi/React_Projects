import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColorPickerController = ({hideController=false,selectedColor}) => {
 
   const [color, setColor] = useState('rgba(255,255,255,1)')
   


  return (
    <div>
         <p className=' mb-2 text-sm text-red-400'>Note : for icon display tap on color picker</p>
      <ColorPicker value={color} onChange={(e)=>{setColor(e);
        selectedColor(e)
      }} 
      hideControls={hideController}
      hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType
    />
    </div>
  )
}

export default ColorPickerController