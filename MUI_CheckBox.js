import { Checkbox } from "@mui/material";
import React from "react";
import { useState} from "react";

function MyCheckBox(){
    const [checked, setchecked] = useState(true);
    return(
        <div>
            <Checkbox
            checked={checked}
            onChange={(event)=>setchecked(event.target.checked)}
            color="primary"
            
            />
        </div>
    )
}

function MUI_CheckBox() {
    
    return (
      <div>
      <MyCheckBox/>
      
      </div>
      
    );
  }
  
export default MUI_CheckBox;
