import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './styles.css'

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newTask]
    })
  }

  toggleTask = taskId => {
    console.log(taskId)
    this.setState({
      list: this.state.list.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
  this.setState({
    list: this.state.list.filter(task => !task.completed)
  });
};


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}
        />
        <div>

          <TodoList
            tasks={this.state.list}
            toggleTask={this.toggleTask}
            clearCompleted={this.clearCompleted}
          />

        </div>
      </div>
    );
  }
}

export default App;
