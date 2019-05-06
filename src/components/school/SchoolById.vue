<template>
	<div class="schoolById">
		<el-form ref="form"  label-width="200px"  >
		  <el-form-item label="学校名称" prop="schoolName">
				<el-input v-model="list.schoolName" :disabled="true"></el-input>
		  </el-form-item>
		  <el-form-item label="学校地址" prop="schoolPlace">
				<el-input v-model="list.schoolPlace" :disabled="true"></el-input>
		  </el-form-item>
			<el-form-item label="学校公众号" prop="schoolIntro">
				<el-input v-model="list.schoolIntro" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="学校联系人" prop="contactPerson">
				<el-input v-model="list.contactPerson" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="学校联系方式" prop="contactPhone">
				<el-input v-model="list.contactPhone" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click='onCancel'>返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default{
	name:'schoolById',
	/* params:{
		schoolId:"schoolId"
	}, */
	data(){
		return{
			list:[]
			
			
		}
	},
	methods: {
		onCancel() {
			this.$confirm('确认返回吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				this.$router.push('/admin/school');
			}).catch(() => {
			
			});
		},
		getSchoolById(schoolId){
			console.log(schoolId);
			var api = 'http://localhost:8088/school/selectSchoolById?schoolId=' + schoolId ;
			this.$http.get(api).then((response)=>{
				console.log(response);
				if(response.status == '200'){
					this.list = response.body;
					console.log(this.list);
				} else {
					 console.log('error show!');
				} 
				
			},(err)=>{
				
			}
			);
		}
	},
	mounted(){
		console.log(this.$route.query);
		this.getSchoolById(this.$route.query.schoolId);
	}
}
</script>

<style>
	 body > .el-container {
	  margin-bottom: 40px;
		text-align: center;
	}
	
</style>
