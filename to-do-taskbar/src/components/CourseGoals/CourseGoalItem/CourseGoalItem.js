import React from 'react';
import Tooltip from '@mui/material/Tooltip';


import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <Tooltip title='Click on goal to delete.' placement='right' arrow>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
    </li>
    </Tooltip>
  );
};

export default CourseGoalItem;