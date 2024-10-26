import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function MUI_Button2() {
    
    return (
      <div>
      <Button 
      variant="text"
      size="large"
      color="primary"
      onClick={()=>alert('clicked')}
      startIcon={<SendIcon/>}
      sx={{ padding: 2, backgroundColor: 'secondary.main', fontSize: '18px' }}
      >
        Submit
      </Button>
      </div>
      
    );
  }
  
export default MUI_Button2;