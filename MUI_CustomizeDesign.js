import { makeStyles } from '@mui/styles';
import Button from "@mui/material/Button";
import MyButton from './Mybutton';

// const useStyles=makeStyles({
//     root:{
//         background: 'linear-gradient(50deg,#FE6B8B,#FF8E53)',
//         border:10,
//         color:'white',
//         borderRadius:20,
//         padding:'25px'
//     }
// })

// function MyButton() {
//     const classes=useStyles();
//     return <Button className={classes.root}>CUSTOMIZED BUTTON</Button>;
// }

function MUI_CustomizeDesign() {
    
    return (
      <div>
      <MyButton/>
      </div>
    );
  }
  
export default MUI_CustomizeDesign;