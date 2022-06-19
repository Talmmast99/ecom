<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
		<div class="container-fluid justify-content-end">
			
			<div class="bag-container">
				<button class="btn btn-dark px-4" @click="showList">
					Card
				</button>
				<div class="list-products-paid bg-white" v-if="showingList">
					<table class="table table-striped table-hover m-0 py-4" v-if="shoMe">
						<tbody>
							<tr v-for="(item, index) in listOfPaidProducts" :key="index" class="">
								<td>
									<img :src="generateUrl(item.image)" style="height:50px;">
								</td>
								<td>
									{{item.name}}
								</td>
								<td>
									{{item.price}}
								</td>
							</tr>
						</tbody>
					</table>
					<p v-else>
						{{message}}
					</p>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name:"BagProducts",
	props:['listOfPaidProducts'],
	data() {
		return {
			showingList:false,
			testingValue:'',
			message:'No Products to Showing'
		}
	},
	methods: {
		showList()
		{
			this.showingList=!this.showingList;
		},
		generateUrl(image)
		{
			return require('../assets/images/'+image+'.jpg')
		}
	},
	computed: {
		shoMe()
		{
			return (this.listOfPaidProducts.length > 0) ? true : false
		}

	}
}
</script>

<style>

.bag-container
{
	position:relative;
}

.list-products-paid
{
	position:absolute;
	top:110%;
	right:0;
	z-index:1;
	width:300px;
}

.list-products-paid table td ,
.list-products-paid table tr
{
	border:none !important;
}



</style>