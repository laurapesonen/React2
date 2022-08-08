import React, {useState} from "react";

const Header = (props) =>{
  return(
    <div>
      <h1>{props.nimi}</h1>
    </div>
  )

}



const Statistics = (props) => {
  

    if(props.summa === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
    
  )

      }

    else{
      return(
  <div>

    <h1>Statistics</h1>
    <StatisticLine text="good" value={props.good}/>
    <StatisticLine text="neutral" value={props.neutral}/>
    <StatisticLine text="bad" value={props.bad}/>
    <StatisticLine text="sum" value={props.summa}/>
    <StatisticLine text="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
    <StatisticLine text="Positive (%)" value={(props.good + props.neutral) / (props.good + props.neutral + props.bad)}/>

  </div>

      )
    }
  
  
}

const StatisticLine = (props) => {
  return(
    <>
      <p>{props.text} : {props.value}</p>
    </>
  )
};

const Button = (props) => {
  return(
    
      <button onClick={props.handleClick}>{props.text}</button>
    
  )
}




const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const nimi = "Give Feedback"
  const summa = good + neutral + bad
  
  
  
 


  return (
    <div>
      
      <Header nimi={nimi} />
      

      
      <Statistics good={good} neutral={neutral} bad={bad} summa={summa}/>
      <button onClick={() => setGood(good + 1)}> good </button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick={() => setBad(bad + 1)}> bad </button>
      
    </div>
    
  )
}

//ReactDOM.render(<App />, document.getElementById('root'));
export default App