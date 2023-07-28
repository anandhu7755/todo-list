import React, { useEffect } from 'react'
import { List, Button, Icon } from 'semantic-ui-react'
import { getToDoItems, getCompletedItems, completeItem, removeItem } from '../features/todo/todoSlice'
import { useSelector, useDispatch } from 'react-redux';


function ListComponent(props) {


  const todoItems = useSelector(getToDoItems);
  const completedItems = useSelector(getCompletedItems);
  const dispatch = useDispatch()



  const onComplete = (data) => {
    debugger
    let completedItem = todoItems.find((item) => { return item.id == data })
    dispatch(completeItem(completedItem))
  }

  const onclose = (data) => {
    
    let closedItem = todoItems.find((item) => { return item.id == data })
    dispatch(removeItem(closedItem))

  }

  let listOfItemsToDo = todoItems.map(element => {
    return (
      <List divided relaxed key={element.id}>
        <List.Item >
          <List.Content floated='left'><a onClick={() => { onComplete(element.id) }}><Icon name='check circle' bordered circular></Icon></a></List.Content>
          <List.Content floated='right'><a onClick={()=>{onclose(element.id)}}><Icon name='close' color='red' bordered circular></Icon></a></List.Content>

          <List.Content>
            <List.Header>{element.value}</List.Header>
          </List.Content>
        </List.Item>

      </List>)
  });

  let listOfItemsCompleted = completedItems.map(element => {
    return (
      <List divided relaxed key={element.id}>
        <List.Item>
          <List.Content>
            <List.Header>{element.value}</List.Header>
          </List.Content>
        </List.Item>
      </List>)
  });
  return (
    <div>
      {props.isCompleted ? listOfItemsCompleted : listOfItemsToDo}
    </div>
  )
}

export default ListComponent
