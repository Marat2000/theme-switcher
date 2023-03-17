import Toggle from './Toggle'
import {useContext} from 'react'
import {AppContext} from '../App'

const Header=()=>
{

const {dark}=useContext(AppContext)
	return(
	<header>
<div>
  <h1   style={{color: `${dark?'':'var(--LBlueText)'}` , transition:'.3s'}} >Social Media Dashboard</h1>
  <p className={dark ?'darkText':'lightText'} style={{ fontWeight:'bold'}}  >Total Followers: 23,004</p>
</div>

<Toggle/>
</header>
)}
export default Header