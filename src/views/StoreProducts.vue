<template>
	<BagProducts :listOfPaidProducts="PaidProducts"></BagProducts>
	<section id="products">
		<div class="container">
			<div class="row">
				<div class="col-4" v-for="item,index in productsList" :key="index">
					<div class="card">
						<img :src="generateUrl(item.image)" class="card-img-top " alt="">
						<div class="card-body">
							<h2 class="h4">{{ item.name }}</h2>
							<p class="text-dark">{{ item.description }}</p>
							<div class="d-flex align-items-center justify-content-center">
								<p class="price my-0 me-4 fw-bold">
									{{item.price}}$
								</p> 
								<button class="btn btn-success fs-6 py-2 px-3" @click="addToPaidList(item)">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

import dataProducts  from '../data/data.json'
import BagProducts from '../components/BagProducts.vue'

export default {
	name:'StoreProducts',
	components:{BagProducts},
	data() {
		return {
			productsList:dataProducts,
			PaidProducts:[]
		}
	},
	methods: 
	{
		generateUrl(url)
		{
			return require('../assets/images/'+url+'.jpg');
		},
		addToPaidList(product)
		{
			let obj={}
				obj.image=product.image,
				obj.name=product.name,
				obj.price=product.price

			let productFind=this.PaidProducts.find(item => item.name == product.name )
			
			if(productFind)
				productFind.price=this.UpdatePrice(productFind.price,product.price)
			else			
				this.PaidProducts.push(obj)
		},
		UpdatePrice(currentPrice,Price)
		{
			return currentPrice + Price;
		}
	}
}
</script>