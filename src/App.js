import  {BiX, BiCircle} from 'react-icons/bi'
import {GrPowerReset} from 'react-icons/gr'
import {useState , useEffect} from 'react'

function App() {



	const [state,setState]=useState(
	[[0,0,0],
	[0,0,0],
	[0,0,0]])
	const [k,setK]=useState(0)
 	const [win,setWin]=useState(false)
 	const [lose,setLose]=useState(false)
 	const [score,setScore]=useState([0,0])

const refresh=()=>
{
	setState(
	[[0,0,0],
	[0,0,0],
	[0,0,0]])
	setK(0)
	setWin(false)
	setLose(false)
}

const click=async(x,y)=>
{	
if(win==false && lose==false)
	{let i=1;
	
		if(state[x][y]==0)
		{
			setK(k+1)
			state[x][y]=1;
await	setState([...state]);
			if(k<4 && win==false )
		await	makeO(x,y);
			}}

}




const render=(x,y)=>
{
	if(state[x][y]==1)
		return  <BiX className='x'/>
	if(state[x][y]==2)
		return  <BiCircle className='o'/>
}

const newGame=()=>
{
	refresh();
	setScore([0,0]);


}

const makeO=(x,y)=>
{

if(win==false)
	{
	setState([...state])
	

let m=Math.floor(Math.random()*101)

if(m<=55)
{
	if(x==2 && y==0 && state[1][1]==0)
		state[1][1]=2
	else if(x==2 && y==0 && state[0][2]==0)
		state[0][2]=2
	
	
	
	else if(x==0 && y==2 && state[1][1]==0)
		state[1][1]=2
	else if(x==0 && y==2 &&  state[2][0]==0)
		state[2][0]=2
	
	
	else if(x==0 && y==0 && state[1][1]==0)
		state[1][1]=2
	else if(x==0 && y==0 && state[2][2]==0)
		state[2][2]=2
	
	
	else if(x==2 && y==2 && state[1][1]==0)
		state[1][1]=2
	else if(x==2 && y==2 && state[0][0]==0)
		state[0][0]=2
	
	else randomRow(x,y);
}	

if(m>55)
{
	
	 if(x==2 && y==0 && state[0][2]==0)
		state[0][2]=2
	else if(x==2 && y==0 && state[1][1]==0)
		state[1][1]=2
	
	else if(x==2 && y==2 && state[0][0]==0)
		state[0][0]=2
		else if(x==2 && y==2 && state[1][1]==0)
		state[1][1]=2
	else if(x==0 && y==0 && state[2][2]==0)
		state[2][2]=2
	
	else if(x==0 && y==0 && state[1][1]==0)
		state[1][1]=2
	
	else if(x==0 && y==2 &&  state[2][0]==0)
		state[2][0]=2
	

	else if(x==0 && y==2 && state[1][1]==0)
		state[1][1]=2
	
	
	else randomRow(x,y);
}	




}
}


const randomRow=(x,y)=>
{
		let h=0;
		while(h<1)
			{
				let a=Math.floor(Math.random()*3)
				let n=Math.floor(Math.random()*101)
				console.log('a=',a)
			if(n<=55)
			{if( state[x][a]==0 )
					{	state[x][a]=2; h++;}
 			else if(state[a][y]==0)
						{state[a][y]=2;h++;}}

						
							if(n>55)
			{
 			if(state[a][y]==0)
						{state[a][y]=2;h++;}
			else if( state[x][a]==0 )
						{state[x][a]=2; h++;}}
			
			}

}


const youWin=()=>
{
if(state[1][1]==1)
{
	if(state[0][0]==1 && state[2][2]==1)
		setWin(true);
	else if(state[0][2]==1 && state[2][0]==1)
		setWin(true);
}



for(let i=0;i<=2;i++)
{let z=0;
	for(let j=0;j<=2;j++)
	{if(state[i][j]==1)
		z++ ;}
		if(z==3)
		setWin(true)
		else z=0;}	
		
		
for(let i=0;i<=2;i++)
{let z=0;
	for(let j=0;j<=2;j++)
	{if(state[j][i]==1)
		z++ ;}
		if(z==3)
		setWin(true);
		else z=0;}	
		
		// console.log(win);

	
}

const youLose=()=>
{
if(state[1][1]==2)
{
	if(state[0][0]==2 && state[2][2]==2)
		setLose(true)
	else if(state[0][2]==2 && state[2][0]==2)
		setLose(true)
}



for(let i=0;i<=2;i++)
{let z=0;
	for(let j=0;j<=2;j++)
	{if(state[i][j]==2)
		z++ ;}
		if(z==3)
		setLose(true);
		else z=0;}	
		
		
for(let i=0;i<=2;i++)
{let z=0;
	for(let j=0;j<=2;j++)
	{if(state[j][i]==2)
		z++ ;}
		if(z==3)
		setLose(true);
		else z=0;}	
		
		// console.log(lose);

	
}



useEffect(()=>{ youWin();youLose();
	if(win==true)
		{ 
			score[0]=score[0]+1
			setScore([...score]);winLine();}
	if(lose==true)
		{ score[1]=score[1]+1
			setScore([...score]);loseLine();}
	console.log(score[0]+"/"+score[1])
	},[lose,win,state])

const winLine=()=>
{
		

			if(state[0][0]==1 && state[1][1]==1 && state[2][2]==1)
				return (<div style={{left:'-8rem' , rotate:'45deg'}} className='line' ></div>)

			if(state[0][0]==1 && state[0][1]==1 && state[0][2]==1)
				return(<div style={{top:'-6rem' ,left:'-8rem '}} className='line' ></div>)

			if(state[0][0]==1 && state[1][0]==1 && state [2][0]==1)
				return(<div style={{left:'-13.7rem' , rotate:'90deg'}} className='line' ></div>)


			if(state[1][0]==1 && state[1][1]==1 && state[1][2]==1)
				return(<div style={{left:'-8rem'}} className='line' ></div>)
				
			
			if(state[2][0]==1 && state[2][1]==1 && state[2][2]==1)
				return(<div style={{top:'6rem' ,left:'-8rem '}} className='line' ></div>)
				

			if(state[0][1]==1 && state[1][1]==1 && state[2][1]==1)
				return(<div style={{left:'-8rem', rotate:'90deg'}} className='line' ></div> )

			if(state[0][2]==1 && state[1][2]==1 && state[2][2]==1)
				return(<div style={{left:'-2.3rem', rotate:'90deg'}} className='line' ></div> )
			
			if(state[0][2]==1 && state[1][1]==1 && state[2][0]==1)
				return(<div style={{left:'-8rem' ,rotate:'135deg'}} className='line' ></div>)

}


const loseLine=()=>
{
		

			if(state[0][0]==2 && state[1][1]==2 && state[2][2]==2)
				return (<div style={{left:'-8rem' , rotate:'45deg' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)

			if(state[0][0]==2 && state[0][1]==2 && state[0][2]==2)
				return(<div style={{top:'-6rem' ,left:'-8rem ' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)

			if(state[0][0]==2 && state[1][0]==2 && state [2][0]==2)
				return(<div style={{left:'-13.7rem' , rotate:'90deg' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)


			if(state[1][0]==2 && state[1][1]==2 && state[1][2]==2)
				return(<div style={{left:'-8rem' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)
				
			
			if(state[2][0]==2 && state[2][1]==2 && state[2][2]==2)
				return(<div style={{top:'6rem' ,left:'-8rem ' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)
				

			if(state[0][1]==2 && state[1][1]==2 && state[2][1]==2)
				return(<div style={{left:'-8rem', rotate:'90deg' , backgroundImage:'var(--blueLine)'}} className='line' ></div> )

			if(state[0][2]==2 && state[1][2]==2 && state[2][2]==2)
				return(<div style={{left:'-2.3rem', rotate:'90deg' , backgroundImage:'var(--blueLine)'}} className='line' ></div> )
			
			if(state[0][2]==2 && state[1][1]==2 && state[2][0]==2)
				return(<div style={{left:'-8rem' ,rotate:'135deg' , backgroundImage:'var(--blueLine)'}} className='line' ></div>)

}





  return (<div style={{borderRadius:'2rem 2rem 3rem 3rem', padding:'1rem', border:'var(--border)', boxShadow:'var(--shadow)'}} >

  	
  	
  	<div  className='score'  >
  		<div className='controlBtn' onClick={newGame}>New Game</div>
  		<div style={{fontWeight:'bold', fontSize:'2rem'}} > 

  			<span style={{color:'var(--red)'}} >{score[0]}</span> / <span style={{color:'var(--blue)'}}>{score[1]}</span> 
  		</div>
  		<GrPowerReset onClick={refresh} style={{ fontSize:'2rem'}} className='controlBtn' />
  	</div>


  	<div className='container' style={{position:'relative'}} >
  		
  		<div className='col'>
  	
  	<div className='row leftTop' onClick={()=> click(0,0)} >{ render(0,0) }</div>
  	
  	<div className='row'  onClick={()=> click(0,1)}>{render(0,1)}</div>
  	
  	<div className='row rightTop'  onClick={()=> click(0,2)} >{render(0,2)}</div>
  		</div>	

  		<div className='col'>
  	<div className='row'  onClick={()=> click(1,0)}>{render(1,0)}</div>
  	
  	<div className='row'  onClick={()=> click(1,1)}>{render(1,1)}</div>
  	
  	<div className='row'  onClick={()=> click(1,2)}>{render(1,2)}</div>
  		</div>	
  	
  		<div className='col'>
  	<div className='row leftBott'  onClick={()=> click(2,0)}>{render(2,0)}</div>
  	
  	<div className='row'  onClick={()=> click(2,1)}>{render(2,1)}</div>
  	
  	<div className='row rightBott'  onClick={()=> click(2,2)}>{render(2,2)}</div>
  		</div>

  		<div style={{position:'absolute'}} > {winLine()} </div>
  		<div style={{position:'absolute'}} > {loseLine()} </div>
  		  		 		
  		
  		
  	
  	
  	</div>
  	

 </div> );}


export default App;
