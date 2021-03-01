import { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// DB
import tasks from './sample/tasks.json';

// Components
import { Tasks } from "./components/Tasks";
import { TaskForm } from "./components/TaskForm";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    tasks
  };

  addTask = (task) => {
    const newTask = {...task, id: this.state.tasks.length};

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id == id) {
        task.done = !task.done
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>

          <Route exact path="/" render={() => {
            return <>
              <TaskForm addTask={this.addTask} />
              <Tasks
                tasks={this.state.tasks}
                deleteTask={this.deleteTask}
                checkDone={this.checkDone}
              />
            </>
          }}></Route>
          <Route path="/posts" component={Posts}></Route>
        </Router>
      </>
    );
  }
}

export default App;
