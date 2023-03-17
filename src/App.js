import  {BiX, BiCircle} from 'react-icons/bi'
import {GrPowerReset} from 'react-icons/gr'
import {useState , useEffect, createContext} from 'react'
import TopCard from './components/TopCard'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'

export const AppContext=createContext({})

function App() {

const [dark,setDark]=useState(true);



const [topCard,setTopCard]=useState([
	{
		user:'@nathanf',
		logo:'./images/icons/fb.svg',
		num:1987,
		title:'Followers',
		today:12,
		border:'0',
		up:false
	},

	{
		user:'@nathanf',
		logo:'./images/icons/tw.svg',
		num:1044,
		title:'Followers',
		today:99,
		border:'0',
		up:true
	},

	{
		user:'@realnathanf',
		logo:'./images/icons/inst.svg',
		num:`${11}k`,
		title:'Followers',
		today:1099,
		border:'0',
		up:true
	},

	{
		user:'Nathan F.',
		logo:'./images/icons/ytb.svg',
		num:8239,
		title:'Subscribers',
		today:144,
		border:'0',
		up:false
	}
])

const [card,setCard]=useState([

{
	title:'Page Views',
	num:87,
	logo:'./images/icons/fb.svg',
	per:3,
	up:true
},
{
	title:'Likes',
	num:52,
	logo:'./images/icons/fb.svg',
	per:2,
	up:false
},
{
	title:'Likes',
	num: 5462,
	logo:'./images/icons/inst.svg',
	per:2257,
	up:true
},
{
	title:'Profile Views',
	num:52,
	logo:'./images/icons/inst.svg',
	per:1375,
	up:true
},
{
	title:' Retweets',
	num:117,
	logo:'./images/icons/tw.svg',
	per: 303,
	up:false
},
{
	title:'Likes',
	num:507,
	logo:'./images/icons/tw.svg',
	per:553,
	up:true
},
{
	title:'Likes',
	num:107,
	logo:'./images/icons/ytb.svg',
	per:19,
	up:false
},
{
	title:'Total Views',
	num:1407,
	logo:'./images/icons/ytb.svg',
	per:12,
	up:true
},




	])


return(

<main  className={dark? '' : 'lmain'}  >
<AppContext.Provider value={{topCard ,setTopCard, card , dark,setDark}}>
<div className={dark? 'backColor': 'backColor  lBackColor'} ></div>

<div className="container">
	<Header/>
		<TopCard/>
 <h2 style={{marginTop:'4rem'}} className={dark?'':'lightText'}>Overview - Today</h2>
	<Card/>

</div>

<Footer/>

</AppContext.Provider>
</main>
)}


export default App;
