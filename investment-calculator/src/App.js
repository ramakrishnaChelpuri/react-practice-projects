import React,{useState} from 'react'
import Header from './Components/Header/Header.js'
import CalculatorForm from './Components/Input/CalculatorForm.js'
import ResultsTable from './Components/Results/ResultsTable.js'

function App() {
  const [userInput,setUserInput]=useState(null);
  
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
    console.log(yearlyData)
  };


  const yearlyData = []; 

  if(userInput){
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
    };
  }
  

  return (
    <div>
      <Header/>
      <CalculatorForm 
        onCalculate={calculateHandler} 
      />
      {!userInput && <p style={{textAlign:'center'}}>There are no investments to be calculated!</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
