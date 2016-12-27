import React from 'react';
import Tasks from './components/tasks.js';
import Filter from './components/Filter.js';
import AddTask from './components/AddTask.js';

var App = React.createClass({
	getInitialState() {
		return {
			counter : 0,
			todos : [],
			filter : 'All'
		};
	},

	addTask : function(inputValue) {
		var todos = this.state.todos;
		var todo = {
			text: inputValue,
			id: this.state.counter + 1,
			completed: false
		};
		todos.push(todo);
		this.setState({todos: todos, counter: this.state.counter + 1});
	},

	toggleTask : function(id) {
		var todos = this.state.todos;
		todos.map((eachTodo) => {
			if (id != eachTodo.id) {
				return eachTodo;
			} else {
				return eachTodo.completed = !eachTodo.completed;
			}
		});
		this.setState({todos: todos});
	},

	filterClick : function(filter) {
		this.setState({
			filter: filter
		});
	},

	render: function() {
		return (
			<div>
				<AddTask onAddTask={this.addTask}/>
				<Tasks todos={this.state.todos} filter={this.state.filter} 
						onToggleTask={this.toggleTask}/>
				<Filter onFilterClick={this.filterClick}/>
			</div>
		);
	}
});

export default App;