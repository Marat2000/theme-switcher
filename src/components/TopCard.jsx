import {useContext, useEffect} from 'react'
import {AppContext} from '../App'

const TopCard=()=>
{
const {topCard,setTopCard,dark}=useContext(AppContext)

const border=(item)=>
{
	
		if(item.logo=='./images/icons/fb.svg')
	return <span className='back fb'></span>
	else if(item.logo=='./images/icons/tw.svg')
	return <span className='back tw'></span>
	else if(item.logo=='./images/icons/inst.svg')
	return <span className='back inst'></span>	
	else if(item.logo=='./images/icons/ytb.svg')
	return <span className='back ytb'></span>

	setTopCard([...topCard])
	console.log(topCard);

}



return(<div className="allTopCards">

{topCard.map(item=>{
return(<div className={dark ?"topCardWithBorder":"LtopCardWithBorder"}   >
	
		{border(item)}
	
	<div className={dark?'topCard':'LTopCard'} >
<span> <img alt="logo" src={item.logo}/> <span className={dark?'darkText user':'lightText user'}> {item.user} </span> </span> 
  <h3 style={{fontSize:'3.5rem ', margin:'.8rem 0 0 0'}} >{item.num}</h3>
 <span className={dark?'darkText followers':'lightText followers'} > {item.title}</span>
<span className="today"> <img alt="arrow" src={item.up?'./images/icon-up.svg': './images/icon-down.svg'} /><span className={item.up?'green':'red'}> {item.today} Today</span></span>
</div>


</div>)})}
</div>)

}

export default TopCard