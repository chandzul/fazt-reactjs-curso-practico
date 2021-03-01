import React, { Component } from 'react';

class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
  }

  onChange = (e) => {
    // console.log(e.target.name, e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {

    return(
      <div>
        <form onSubmit={this.onSubmit} action="" >
          <input
            type="text"
            name="title"
            placeholder="Write a task"
            onChange={this.onChange}
            value={this.state.title}
          />
          <br/>
          <textarea
            name="description"
            placeholder="Write a description"
            onChange={this.onChange}
            value={this.state.description}
            cols="30"
            rows="10">
          </textarea>
          <br/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export {
  TaskForm
}