import React from 'react'
import './AddTask.css'

function AddTask(props) {

    return (!props.clickAddTask ?
        <button type="submit" className="btn btn-primary mb-3 mt-3" onClick = {props.clickAddTaskHundler}>Добавить задачу</button>
        :
        
        <form onSubmit = {props.handleSubmit}>
        
            <div className="input-group mb-3 mt-3">
                

                <div className="form-group">
               
                <textarea id = 'nameAddTask' value = {props.addTask.nameTask} onChange = {props.handleInputChange} name = 'nameTask' type="text"  className="form-control form-valid" placeholder="Имя задачи" />
                </div>

                <div className="form-group">
                
                <textarea id = 'textAreaAddTask'  value = {props.addTask.task} onChange = {props.handleInputChange} type="text" name = 'task' className="form-control form-valid" placeholder="Описание" />
           
                </div>


               



            </div>
            <button  type="submit" className="btn btn-primary btn-hidden" id ='btn' disabled={props.disabledBtn} >Добавить</button>
        </form>
        

        
    )
    
    
}
export default AddTask;