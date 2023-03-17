import {useContext} from 'react'
import {AppContext} from '../App'

const Toggle=()=>{


const {dark,setDark}=useContext(AppContext)

const modeSwitch=()=>
{
	setDark(!dark);

}

return(
<div className={dark?"mode darkText":"mode Lmode lightText"} >
  <span>Dark Mode</span>
  <div className={dark?"toggle" :"toggle toggleClicked"} onClick={modeSwitch} >
  	<div className={dark? 'circle': 'circle circleClicked'}></div>  
  </div>
</div>
  )}

export default Toggle