import React, {Component} from 'react';
import Table from './components/Table/Table';
import AddTask from './components/AddTask/AddTask';
import Search from './components/Search/Search'


class App extends Component {

  state = {
    tasks:[],
    search: '',
    clickAddTask: false,
    addTask: {
      nameTask: '',
      task: '',
    },
   

    
  }
deleteTask(e) {
  let tasks = [...this.state.tasks]
  let taskId = e.target.parentNode.parentNode.firstChild.innerHTML;

  tasks.splice(taskId, 1)

  this.setState({
    tasks
  })
  

 





}
//изменение задачи
  handleTaskChange(e) {

    let tasks = [...this.state.tasks]
    let taskValue = e.target.value;
    let taskId = e.target.parentNode.parentNode.firstChild.innerHTML;

    
    
    tasks[taskId].task=taskValue
    
    
    this.setState({
      tasks
    })
    
    

  }

   //проверка ввода в поля
   handleInputChange(e) {

    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    let addTask = this.state.addTask;

    addTask[name] = value;

    
    this.setState({
      addTask
    })
  }

  clickAddTaskHundler(){
    this.setState({
      clickAddTask:true
    })
  }


  handleSubmit(event) {
    event.preventDefault()

    let items = [...this.state.tasks]
    let addTask = this.state.addTask
    console.log(this.state.addTask.task)
 //вносим нового пользователя в массив
    items.unshift({
      id: items.length,
      name: this.state.addTask.nameTask,
      task: this.state.addTask.task,
    });


    //очищаю поля input
    addTask.nameTask = '';
    addTask.task = '';

    this.setState({
      tasks:items,
      addTask,

    })

  } 


  searchHandler = search => {
    this.setState({search,
      backTaskTable:false,
    })
  }

 

  //Поиск Фильтр
  getFilteredData(){
    

    const {tasks, search} = this.state

    if (!search) {
      return tasks
    }
   var result = tasks.filter(item => {
     return (
       item["name"].toLowerCase().includes(search.toLowerCase()) ||
       item["task"].toLowerCase().includes(search.toLowerCase()) 
       
     );
   });
   if(!result.length){
     result = this.state.tasks
   }
    return result
  
  }


  render() {


    const filteredData = this.getFilteredData();
   
    
    
    
    
    return(
      <div>

        <AddTask 
        clickAddTask = {this.state.clickAddTask}
        clickAddTaskHundler = {this.clickAddTaskHundler.bind(this)}
        handleInputChange = {this.handleInputChange.bind(this)}
        addTask = {this.state.addTask}
        handleSubmit = {this.handleSubmit.bind(this)}
        />
        <Search
            onSearch={this.searchHandler}
            
        />
        <Table
          tasks={filteredData}
          handleTaskChange = {this.handleTaskChange.bind(this)}
          deleteTask = {this.deleteTask.bind(this)}

        />


      </div>
    )
  }

}



export default App;
