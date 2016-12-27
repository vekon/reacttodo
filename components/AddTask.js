import React from 'react';

var AddTask = function(props) {
	let input;

	return	(<form onSubmit={(e) => {
				e.preventDefault();
				props.onAddTask(input.value);
				input.value = '';
			}}>
		<input ref={node => {
          input = node
        }} type="text"/>
		<input type="submit" value="Add"/>
	</form>);
}

export default AddTask;