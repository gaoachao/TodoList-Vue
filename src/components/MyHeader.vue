<template>
	<div class="todo-header">
		<input type="text" 
		placeholder="请输入你的任务名称，按回车键确定" 
		@keyup.enter="add"
		/>
	</div>
</template>
<script>
//生成随机不重复id的库
import {nanoid} from 'nanoid';
export default {
	name:'MyHeader',
	methods:{
		add(e){
			//如果input框内没有东西则按下回车无反应
			if(!e.target.value | e.target.value.trim().length === 0) return;
			//将数据包装成对象
			const todoObj = {id:nanoid(),title:e.target.value.trim(),done:false,isEdit:false}
			this.receive(todoObj);
			//在按下回车后清空input
			e.target.value='';
		}
	},
	props:['receive']
}
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>