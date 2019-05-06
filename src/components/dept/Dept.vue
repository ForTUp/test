<template>
  <div class="school">
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
		<el-form-item label="学校名称">
			<el-input v-model="formInline.schoolName" placeholder="学校名称" id='schoolName'></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">查询</el-button>
			<el-button type="primary" @click="addSchool">添加</el-button>
		</el-form-item>
	</el-form>
	<!-- :data="list" -->
	<el-table
	border
	style="width: 100%;"
	:data="list.data"
	>
		<el-table-column
			 v-for="(item, index) in tableColumnArray"
			:prop="item.prop"
			:label="item.label"
			:key="item.id"
			sortable
			show-overflow-tooltip
			
			>
		</el-table-column>
		
		<el-table-column
			fixed="right"
			label="操作"
			width="150"
			>
			<template slot-scope="scope">
				<el-button type="text" size="small" @click="showSchoolById(scope.$index,scope.row)">查看</el-button>
				<el-button type="text" size="small" @click="updSchool(scope.$index,scope.row)">编辑</el-button>
				<el-button type="text" size="small" @click="delSchool(scope.$index,scope.row)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	<el-pagination
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		:current-page="currentPage"
		:page-sizes="[5, 10, 20, 40]" 
		:page-size="pagesize"        
		layout="total, sizes, prev, pager, next, jumper"
		:total="list.total">   <!-- //这是显示总共有多少数据， -->
	</el-pagination>
  </div>
</template>



<script>
export default {
  name: 'school',
	data(){
		return{
			list:[],
			tableColumnArray:[
					{id: "schoolId", prop:"schoolId", label:"学校ID"},
					{id: "schoolName", prop:"schoolName", label:"学校名称"},
					{id: "schoolPlace", prop:"schoolPlace", label:"学校地址"},
					{id: "contactPerson", prop:"contactPerson", label:"学校责任人"},
					{id: "contactPhone", prop:"contactPhone", label:"联系电话"}
			],
			formInline: {
				schoolName:''
			},
			currentPage:1, //初始页
			pagesize:5    //每页的数据
		}
	},
	methods:{
		open() {
		  this.$notify({
		    title: '删除成功',
		    message: '这是一条删除成功的提示消息',
		    type: 'success'
				
		  })
			},
		getData(currentPage,pagesize,schoolName){
			var api = 'http://localhost:8088/school/selectSchoolListPage?currentPage='
				+currentPage+'&pagesize='+pagesize+'&schoolName='+schoolName;
			this.$http.get(api).then((response)=>{
				console.log(response);
				this.list = response.body;
			},(err)=>{
				console.log(err)
			});
		},
		onSubmit(){
			this.getData(this.currentPage,this.pagesize,this.formInline.schoolName);
			/* var api = 'http://localhost:8088/school/selectListProp.json';
			console.log(this.formInline.schoolName);
			this.$http.post(api,{'schoolName':this.formInline.schoolName},{emulateJSON:true}).then((response)=>{
				console.log(response);
				this.list = response.body.list;
			},(err)=>{
				console.log(err)
			});
			console.log('submit!'); */
		}, 
		addSchool(){
			this.$router.push({path:'/admin/addschool',query:{method:'add'}});
		},
		delSchool(index,data){
			console.log(data.schoolId);
			this.$confirm('确认删除吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				var api = 'http://localhost:8088/school/deleteSchoolById?schoolId=' + data.schoolId ;
				this.$http.get(api).then((response)=>{
					console.log(response);
					if(response.status == '200'){
						this.open();
						/* this.$router.push("/admin/school"); */
						this.getData(this.currentPage,this.pagesize,this.formInline.schoolName);
					} else {
						 console.log('error delete!');
					}
				},(err)=>{
					console.log('error delete!!');
					return false;
				}
				);
			}).catch(() => {
			
			});
		},
		showSchoolById(index,data){
			this.$router.push({path:"/admin/schoolById",query:{schoolId:data.schoolId}});
		} ,
		updSchool(index,data){
			this.$router.push({path:"/admin/addschool",query:{schoolId:data.schoolId,method:'update'}});
		},
		// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
		        this.pagesize = size;
		        console.log(this.pagesize)  //每页下拉显示数据
				this.onSubmit();
		},
		handleCurrentChange: function(currentPage){
		        this.currentPage = currentPage;
				this.onSubmit();
		        console.log(this.currentPage)  //点击第几页
		}
	},
	
	mounted() {
		this.onSubmit();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
  
  body > .el-container {
    margin-bottom: 40px;
		text-align: center;
  }
  .el-table{
		text-align: center;
	}
</style>
