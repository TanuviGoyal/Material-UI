import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

function MUI_Button() {
  const [formats, setFormats] = useState([]);
  const handleFormatChange=()=>{

  }
  return (
  <Stack spacing={4}>
    <Stack spacing={2} direction='row' >
      <Button variant="text">Text</Button>
      <Button variant="contained" href='https://google.com'>Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
      <Button variant="contained" color='primary'>Primary</Button>
      <Button variant="contained" color='secondary'>secondary</Button>
      <Button variant="contained" color='error'>error</Button>
      <Button variant="contained" color='warning'>warning</Button>
      <Button variant="contained" color='info'>info</Button>
      <Button variant="contained" color='success'>success</Button>
    </Stack>

    <Stack display='block' spacing={2} direction='row'>
      <Button variant="contained" size='small'>small</Button>
      <Button variant="contained" size='medium'>medium</Button>
      <Button variant="contained" size='large'>large</Button>
    </Stack>

    <Stack spacing={2} direction='row' >
      <Button variant="contained" startIcon={<SendIcon/>} disableRipple onClick={()=> console.log('CLicked on button')}>send</Button>
      <Button variant="contained" endIcon={<SendIcon/>} disableElevation>send</Button>

      <IconButton aria-label='send' color='success' >
        <SendIcon/>
      </IconButton>
    </Stack>

    <Stack direction='row'>
      <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label='alignment button group'>
        <Button onClick={()=>alert('left clicked')}>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
    </Stack>

    <Stack direction='row'>
      <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
        <ToggleButton value='bold' aria-label='bold'>
          <FormatBoldIcon/>
        </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'>
          <FormatItalicIcon/>
        </ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'>
          <FormatUnderlinedIcon/>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
    
  </Stack>
    
  );
}

export default MUI_Button;