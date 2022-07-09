<template>
	<li>
		<label>
			<input type="checkbox" 
			:checked="thing.done" 
			@click="handleCheck(thing.id)">
			<span v-show="!thing.isEdit">{{thing.title}}</span>
			<input 
				type="text" 
				ref="inputTitle"
				v-show="thing.isEdit" 
				:value="thing.title"
				@blur="handleBlur(thing.id,$event)"
				>
			<!--此处直接传入事件对象-->
		</label>
		<button class="btn btn-danger" 
		@click="handleDelete(thing.id)">删除</button>
			<button class="btn btn-edit"
		v-show="!thing.isEdit"
		@click="handleEdit(thing)">编辑</button>
	</li>
</template>
<script>
import { toUnicode } from 'punycode';

export default {
	name:'MyItem',
	props:['thing'],
	methods:{
		handleCheck(id){
			this.$bus.$emit('checkTodo',id);
		},
		handleEdit(thing){
			if(thing.hasOwnProperty('isEdit')){
				thing.isEdit = true;
			} else {
				this.$set(thing,'isEdit',true);
			}
			// this.$refs.inputTitle.focus(); 
			// 这样写是不奏效的，要等整个回调执行完毕后才会去再次解析模板然后出现input框
			this.$nextTick(function(){
				this.$refs.inputTitle.focus(); 
			})

		},
		handleBlur(id,e){
			if(e.target.value.trim().length === 0){
				alert("Todo Item Can't be blank");
				return;
			} else {
				console.log(e.target.value);
				this.$bus.$emit('editConfirm',id,e.target.value);
			}
		},
		handleDelete(id,e){
			if(confirm('Confirm to delete?')){
				this.$bus.$emit('deleteTodo',id);
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