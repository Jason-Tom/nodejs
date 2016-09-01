<template lang="jade">
	.header
		.left
			.logo(v-link="'/'") Troquer
		.right
			slot
</template>
<script>
module.exports = {
	name:'hd'
}
</script>
<style lang="sass">
.header {
	position: absolute;
	top:0;
	left:0;
	right:0;
	z-index:5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding:10px 20px;
	border-bottom: solid 1px rgba(0,0,0,.1);
	font-size:0.8em;
	.logo {
		font-size:1.5em;
		cursor: pointer;
	}
	.logo:hover {
		color:black;
	}
}
</style>