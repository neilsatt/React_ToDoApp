import React, { Component } from 'react';

/*
   - define state object with items array
   - create addItem event handler
*/
 class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);
      
        this.state = {
            items: []
        };
      
        this.addItem = this.addItem.bind(this);
      
      
    };
     
    /* 
      - store current value of items state object
      - if input has content, add item object to itemArray
      - unshift moves to beginning of the array
      - prevent default behavior so page doesn't reload and clear everything
      - set state object value to itemArray
      - clear input field value
    */
    addItem(e) {
        var itemArray = this.state.items;
 
        if (this._inputElement.value !== "") {
            itemArray.unshift(
              {
                text: this._inputElement.value,
                key: Date.now()
              }
            );

            this.setState({
              items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();  
        
    }
     
  /* 
    - Create a form with an input field and submit btn 
    - listen for submit event on the form
    - resolve this keyword
    - store reference to input element 
    - this allows us to access the input element inside
    - this component by using _inputElement
  */
      render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} 
                   placeholder="Enter a task">
                </input>
                <button type="submit">add</button>
              </form>
            </div>
          </div>
        );
      }
};
 
export default TodoList;