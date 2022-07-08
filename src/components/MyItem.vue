<template>
	<li>
		<label>
			<input type="checkbox" 
			:checked="thing.done" 
			@click="handleCheck(thing.id)">
			<span>{{thing.title}}</span>
		</label>
		<button class="btn btn-danger" 
		@click="handleDelete(thing.id)">删除</button>
	</li>
</template>
<script>
export default {
	name:'MyItem',
	props:['thing','checkTodo','deleteTodo'],
	methods:{
		handleCheck(id){
			this.checkTodo(id);
		},
		handleDelete(id){
			if(confirm('确定删除吗？')){
				// console.log(d);
				this.deleteTodo(id);
			}
		}
	}
}
</script>
<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li:hover{
	background-color: #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
/* 让鼠标悬浮在li上li的背景色变灰 */
li:hover button{
  display: block;
}
</style>