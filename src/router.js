import { createRouter,createWebHistory } from "vue-router";
import StoreProducts from './views/StoreProducts.vue'

const routes=[
	{
		path:'/',
		name:'Store',
		component:StoreProducts
	}
]


const router= createRouter({
	routes,
	history:createWebHistory()
})

export default router;