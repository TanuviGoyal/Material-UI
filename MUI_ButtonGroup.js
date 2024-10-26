import { Button } from "@mui/material";
import {ButtonGroup} from "@mui/material";

function MUI_ButtonGroup() {
    
    return (
      <div>
      <ButtonGroup
      color="primary">

        <Button variant="contained">
        left
        </Button>

        <Button variant="outlined">
        right
        </Button>

      </ButtonGroup>
      </div>
      
    );
  }
  
export default MUI_ButtonGroup;