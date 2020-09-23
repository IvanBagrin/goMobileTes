import React from 'react'
import './Table.css'
export default props => (

    <table className = 'table'>


        <thead>
            <tr>
                <th className={'thTable'}>Id</th>
            

           
                <th className={'thTable'}>Name</th>
           

            
                <th className={'thTable'}>Date</th>

                <th className={'thTable'}>X</th>
            </tr>

        </thead> 
     
        
        
        <tbody>
            {props.tasks.map(item=>(
                <tr className = {'trTask'} key = {item.id}>
                    <td name = 'id'>{item.id}</td>
                    <td><textarea className = {'textAreaName'}>{item.name}</textarea></td>
                    
                    <td><textarea className = {'textAreaTask'} onChange = {props.handleTaskChange}>{item.task}</textarea></td>
                    <td className = {'deleteTask'} onClick = {props.deleteTask}>удалить</td>
                </tr>
            ))}
        </tbody>

    </table>
)