<template>
  <div class="admin">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<!--左侧导航-->
				<el-aside width="200px">
					<el-row class="tac" >
						<el-menu
						  default-active="2"
						  class="el-menu-vertical-demo"
						  @open="handleOpen"
						  @close="handleClose"
						  background-color="#545c64"
						  text-color="#fff"
						  active-text-color="#ffd04b"
						  >
						  <el-submenu index="1">
							<template slot="title">
							  <i class="el-icon-location"></i>
							  <span>学校管理</span>
							</template>
							<el-menu-item-group >
							  <el-menu-item index="1-1" @click="$router.push('/admin/school')">学校列表</el-menu-item>
							  <el-menu-item index="1-2" @click="$router.push('/admin/dept')">添加班级</el-menu-item>
							</el-menu-item-group>
							<!-- <el-menu-item-group>
							  <el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
							  <template slot="title">选项4</template>
							  <el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu> -->
						  </el-submenu>
						  <el-submenu index="2">
							<template slot="title">
							<i class="el-icon-menu"></i>
							<span >导航二</span>
							</template>
							<el-menu-item-group >
							  <el-menu-item index="1-1" @click="$router.push('/admin/image')">图片</el-menu-item>
							</el-menu-item-group>
						  </el-submenu>
						  <el-menu-item index="3" > <!-- disabled不可点击 -->
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						  </el-menu-item>
						  <el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						  </el-menu-item>
						</el-menu>
					  </el-col>
					</el-row>
				</el-aside>
				<el-main>
					<router-view></router-view> 
				</el-main>
			</el-container>
		</el-container>
  </div>
</template>



<script>
export default {
  name: 'admin',
	data(){
		return{
			list:[],
		}
	},
	methods:{
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted() {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
	height: 550px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
	height: 550px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
		text-align: center;
  }
  .el-table{
		text-align: center;
	}
</style>
