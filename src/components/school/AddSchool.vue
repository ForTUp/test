<template>
  <div class="addSchool">
		<el-form ref="form"  label-width="200px" :model="form" :rules="rules" >
				<el-input v-model="form.schoolId" type="hidden"></el-input>
		  <el-form-item label="学校名称" prop="schoolName">
				<el-input v-model="form.schoolName"></el-input>
		  </el-form-item>
		  <el-form-item label="学校地址" prop="schoolPlace">
				<el-input v-model="form.schoolPlace"></el-input>
		  </el-form-item>
			<el-form-item label="学校公众号" prop="schoolIntro">
				<el-input v-model="form.schoolIntro"></el-input>
			</el-form-item>
			<el-form-item label="学校联系人" prop="contactPerson">
				<el-input v-model="form.contactPerson"></el-input>
			</el-form-item>
			<el-form-item label="学校联系方式" prop="contactPhone">
				<el-input v-model="form.contactPhone"></el-input>
			</el-form-item>
			<el-form-item>
			  <el-button type="primary" @click="submitForm('form')">立即{{msg}}</el-button>
				<el-button @click="resetForm('form')">重置</el-button>
				<el-button @click='onCancel'>取消</el-button>
			</el-form-item>
		</el-form>
  </div>
</template>



<script>
 export default {
	name:"addSchool",
    data() {
      return {
				msg:'添加',
        form: {
          schoolName: '',
          schoolPlace: '',
          schoolIntro: '',
          contactPerson: '',
          contactPhone: '',
					schoolId:''
        },
				 methodSch:'',
				 rules: {
				   schoolName: [
				     { required: true, message: '请输入学校名称', trigger: 'blur' },
				     { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
				   ],
				   schoolPlace: [
				     { required: true, message: '请输入学校地址', trigger: 'blur' },
				     { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
				   ],
					schoolIntro: [
						{ required: true, message: '请输入学校公众号', trigger: 'blur' },
						{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
					],
					contactPerson: [
						{ required: true, message: '请输入学校联系人', trigger: 'blur' },
						{ min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
					],
					contactPhone: [
						{ required: true, message: '请输入学校联系方式', trigger: 'blur' },
						{ min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur' }
					],
				 }
      }
			},
			
    methods: {
			open() {
			  this.$notify({
			    title: '成功',
			    message: '这是一条'+this.msg+'成功的提示消息',
			    type: 'success'
					
			  })
				},
      onSubmit() {
        console.log('submit!');
      },
			onCancel() {
				this.$confirm('确认取消吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					this.$router.push('/admin/school');
				}).catch(() => {
				
				});
			},
			submitForm(formName) {
				console.log(this.methodSch);
				 this.$refs[formName].validate((valid) => {
					if (valid) {
						if(this.methodSch=="add"){
								var api = 'http://localhost:8088/school/addschool';
						} else if(this.methodSch=="update"){
								var api = 'http://localhost:8088/school/updateSchool';
						}
						console.log(JSON.stringify(this.form))
						this.$http.post(api,this.form).then((response)=>{
							console.log(response);
							if(response.status == '200'){
								this.open();
								this.$router.push("/admin/school");
							} else {
								 console.log('error submit!!');	
							}
						},(err)=>{
							
						});
					}else {
						console.log('error submit!!');
						return false;
					}
				 
				 })
			}
			,
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			getSchoolById(schoolId){
				console.log(schoolId);
				var api = 'http://localhost:8088/school/selectSchoolById?schoolId=' + schoolId ;
				this.$http.get(api).then((response)=>{
					console.log(response);
					if(response.status == '200'){
						this.form = response.body;
						console.log(this.form);
					} else {
						 console.log('error show!');
					} 
					
				},(err)=>{
					
				}
				);
			}
    },
		mounted(){
			this.methodSch=this.$route.query.method;
			console.log(this.methodSch);
			if(this.methodSch=="update"){
				this.msg='修改';
				this.getSchoolById(this.$route.query.schoolId);
			}
			
		}
			
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body > .el-container {
    margin-bottom: 40px;
		text-align: center;
  }

  
</style>
