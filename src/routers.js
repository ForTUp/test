import Admin from './components/Admin.vue'
import School from './components/school/School.vue'
import AddSchool from './components/school/AddSchool.vue'
import SchoolById from './components/school/SchoolById.vue'
import Dept from './components/dept/Dept.vue'
import DateTime from './components/date.vue'
import Image from './components/image/imageShow.vue'

const routers = [
	{
		path:'/',
		redirect:'/admin/school'
	},
	{
		path: '/admin',
		name:'Admin',
		component:Admin,
		redirect:'/admin/school',
		children:[
			{
				path: 'school',
				name:'school',
				component:School
				
			},
			{
				path: 'addschool',
				name:'addschool',
				component:AddSchool
				
			},
			{
				path: 'schoolById',
				name:'schoolById',
				component:SchoolById
			},
			{
				path:'dept',
				name:'Dept',
				component:Dept
			},
			{
				path:'image',
				name:'Image',
				component:Image
			}
		]
	},
	{
		path:'/date',
		name:'Date',
		component:DateTime
	}
]

export default routers