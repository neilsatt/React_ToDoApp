import React, { Component } from 'react';

/* Create a form with an input field and submit btn */
 class TodoList extends React.Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Enter a task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
};
 
export default TodoList;