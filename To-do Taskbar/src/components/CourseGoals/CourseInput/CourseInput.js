import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
import Tooltip from '@mui/material/Tooltip';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length>0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length===0){
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
      <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid&& styles.invalid}`}>
        <label>To-do TaskBar</label>
        <Tooltip title="Enter a goal here and click on submit to add goal." placement='right' arrow>
          <input type="text" onChange={goalInputChangeHandler} />
        </Tooltip>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>    
  );
};

export default CourseInput;
