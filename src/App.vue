<template >
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!--父组件可以向子组件传递数据或者方法
						传递方法为子组件向父组件传递数据提出了一种解决思路
				-->
				<MyHeader :receive="receive" />
				<List :todos="todos" 
					:checkTodo="checkTodo" 
					:deleteTodo="deleteTodo" />
				<MyFooter :todos="todos" 
					:checkAllTodo="checkAllTodo"
					:clearAllTodoDone="clearAllTodoDone" />
			</div>
		</div>
	</div>
</template>
<script>
import MyHeader from './components/MyHeader.vue'
import List from './components/List.vue'
import MyFooter from './components/MyFooter.vue'

import { nanoid } from 'nanoid'

export default {
	name: "App",
	components: { MyHeader, List, MyFooter },
	data() {
		return {
			todos: [
				{ id: nanoid(), title: '吃饭', done: true },
				{ id: nanoid(), title: '睡觉', done: true },
				{ id: nanoid(), title: '写代码', done: true }
			]
		}
	},
	methods: {
		receive(item) {
			this.todos.unshift(item);
		},
		checkTodo(id) {
			this.todos.forEach((todo) => {
				if (todo.id === id) {
					todo.done = !todo.done;
					// console.log(todo.done)
				}
			})
		},
		deleteTodo(id) {
			this.todos = this.todos.filter((todo) => {
				return todo.id !== id;
			})
		},
		checkAllTodo(done) {
			if (done === true) {
				this.todos.forEach((todo) => {
					todo.done = true;
				})
			} else {
				this.todos.forEach((todo) => {
					todo.done = false;
				})
			}
		},
		clearAllTodoDone(){
			this.todos = this.todos.filter((todo)=>{
				return !todo.done;
			})
		}
	}
}
</script>
<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}

.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>