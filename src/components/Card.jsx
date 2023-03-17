import {useContext} from 'react'
import {AppContext} from '../App'


const Card=()=>
{
const {card,setCard,dark}=useContext(AppContext)

return(<div className="allCards">

{card.map(item=>{return(

<div className={dark?'card':'Lcard'}>
  <span>
  <span className={dark?"darkText":"lightText"} style={{fontWeight:'bold'}}>{item.title}</span>
  <h2 style={{marginBottom:'0rem'}}>{item.num}</h2>
</span>

<div style={{alignContent:'space-between',  display:'grid' ,  marginRight:'0', marginLeft:'auto'}} >
<img src={item.logo} style={{marginLeft:'auto', marginRight:'0' , display:'table-row'}}/>
  <div style={{alignItems:'center' , display:'flex'}} ><img src={item.up?'./images/icon-up.svg':'./images/icon-down.svg'}/><span className={item.up?'green':'red'}> {item.per}%</span> </div>
</div>
</div>	)})}
</div>)}
export default Card