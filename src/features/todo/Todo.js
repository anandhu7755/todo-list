import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getToDoItems, addItem, getCompletedItems } from './todoSlice'
import { Input, Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';
import List from '../../utilities/listComponent';
import styles from './todo.module.css'

function Todo() {
    const todoItems = useSelector(getToDoItems);
    //const completedItems = useSelector(getCompletedItems);

    const dispatch = useDispatch()
    const [task, setTast] = useState('');
    const [id, setId] = useState(0);



    const onAddNew = () => {
        if (task != '') {
            dispatch(addItem({ id, value: task }))
            document.getElementById('inputTask').value = '';
            setTast('');
            setId(id + 1);
        }

    }

    return (
        <>
            <Segment>
                <Header as='h2' color='violet' textAlign='center' >My ToDo List</Header>
                {/* <Divider section></Divider> */}
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <div className="divInput">
                                <div className="ui right action input">
                                    <input id='inputTask' type="text" placeholder="Enter task" onChange={(data) => { setTast(data.target.value) }} />
                                    <button className=" ui teal icon right labeled button" onClick={onAddNew} >
                                        <i aria-hidden="true" className="add"></i>Add</button>
                                </div>
                            </div>

                            <div className={styles.divTodoList}>
                                {todoItems.length != 0 && <List isCompleted={false}></List>}
                            </div>
                        </Grid.Column>
                        <Grid.Column>

                            <Header as='h3' color='green' textAlign='center' >Completed tasks</Header>
                            {/* <Divider section></Divider> */}
                            <List isCompleted={true}></List>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical >|</Divider>

                </Segment>
            </Segment>
        </>
    )
}

export default Todo
