<template lang="jade">
	div
		hd
			input.search(v-model="keyword",placeholder="ENTER YOUR CODE",@keypress.13="jumpToDownload")
		router-view
</template>

<script>
module.exports = {
	name:'App',
	components:{
        hd: require('./components/hd.vue')
	},data: function() {
        return {
            keyword: ''
        }
    },methods:{
        jumpToDownload: function() {
            this.$router.go('/code/' + this.keyword);
        },
	}
}
</script>

<style lang="sass">
@import './style.scss';

input,textarea,button {
	outline:none;
	border:none;
	border-radius: none;
	background: transparent;
}
html,body {
	height:100%;    
	background-color: #f7f7f7;
    color: #646464;
    margin: 0;
    font-family: ".PingFang-SC-Regular", "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}

.panel {
	box-shadow: 0 4px 20px rgba(0,0,0,.1);
	background: white;
	padding:20px;
	width:55%;
	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left {
			.title {
				font-weight: bold;
			}
		}
		.right {
			.btn {
				display: inline-block;
				margin-left:10px;
				padding:5px 15px;
				border:solid 2px rgba(0,0,0,.1);
				cursor:pointer;
				font-size:0.8em;
			}
			.btn:hover {
				background: #646464;
				border-color:  #646464;
				color:#f7f7f7;
			}
		}
	}
	.panel-content {
		margin-top:20px;
		.file {
			padding:10px 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.btn {
				cursor:pointer;
			}
			.btn:hover {
				opacity: 0.5;
			}
		}
	}
}

</style>