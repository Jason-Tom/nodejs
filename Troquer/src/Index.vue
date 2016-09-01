<template lang="jade">
	.index-page.page
		.panel(v-if="mode=='upload'")
			.panel-header
				.left
					.title UPLOAD FILE
				.right
					.btn(@click="clickAdd") ADD
					.btn(@click="clickSend",v-show="files.length") SEND
			.panel-content(v-show="files.length")
				.file(v-for="file in files")
					.title {{file.name}} ({{filesizeStr(file.size)}})
					.btn(@click="clickRemove(file)") [X]
				input#inputFile(type="file",style="display:none;",multiple)
		.panel(v-if="mode=='uploading'||mode=='finished'")
			.panel-header
				.left
					.title {{mode=='uploading'?'UPLOADING':'FINISHED'}}
				.right
					.btn(@click="clickClose",v-if="mode=='finished'") CLOSE
			.panel-content {{showStatus}}
				.download-link(v-if="code") URL : 
					a(:href="downloadLink(this.code)",target="_blank") {{downloadLink(this.code)}}
				.progress(v-if="!this.code&&!this.errorText")
					.progress-inner(:style="{width:(percent.toFixed()+'%')}")
</template>
<script>
var request = require('superagent');
module.exports = {
    name: 'Index',
    components: {
    },
    data: function() {
        return {
            // keyword: '',
            mode: 'upload',
            files: [],
            percent:0,
            lastUpload:{
            	size:0,
            	timestamp:0
            },
            speed:0,
            code:'',
            errorText:''
        }
    },
    computed:{
    	showStatus:function(){
    		return (this.code && ('CODE : ' + this.code)) || this.errorText || (this.percent.toFixed(1) +'% ['+this.filesizeStr(this.speed)+'/s]');
    	}
    },
    methods: {
        clickAdd: function() {
        	var self = this;
            var $file = document.getElementById('inputFile');
            if (!$file.first) {
                if (typeof FileReader === 'undefined')
                    $file.setAttribute('disabled', 'disabled');
                else
                    $file.addEventListener('change', readFile, false);
                $file.first = true;
            }
            $file.click();
            function readFile(){
            	var file = this.files;
                for(var i =0;i<file.length;i++)
                    self.files.push(file[i]);
            }
        },
        clickSend: function() {
        	var self = this;
        	self.mode = 'uploading';
        	self.errorText = '';
        	self.code = '';
        	self.percent = 0;
        	self.speed = 0;
        	self.lastUpload.size = 0;
        	self.lastUpload.timestamp = Date.now();

            var sum = 0;

            self.files.forEach(function(file,i){
                sum+=file.size;
            });

            if(sum>=1024*1024*1024*10){
                alert('文件总大小不可超过10G');
                return;
            }

        	var _req = request.post('api/v1/upload');
        	self.files.forEach(function(file,i){
        		_req.attach('file'+i,file);
        	})
        	_req.on('progress',function(e){
        		self.percent = e.percent;
        		self.speed = (e.loaded-self.lastUpload.size)/((Date.now()-self.lastUpload.timestamp)/1000);
        		self.lastUpload.size = e.loaded;
        		self.lastUpload.timestamp = Date.now();
        		// console.info(e);
        	}).end(function(err,res){
        		if(err){
        			self.errorText = '网络请求失败';
        		}
        		else {
        			var data = JSON.parse(res.text);
        			if(data.code)
        				self.errorText = data.message;
        			else 
        				self.code = data.data.id;
        		}
        		self.mode = 'finished';
        	})
        },
        clickRemove : function(file){
        	this.files.$remove(file);
        },
        clickClose: function(){
        	this.mode = 'upload';
        	this.files = [];
        },
        downloadLink:function(code){
        	return location.origin +'/#!/code/'+code;
        },
        filesizeStr: function(filesize){
        	var tmp = filesize;
        	if(tmp<1000)return tmp+'B';
        	else {
        		tmp/=1000;
        		if(tmp<1000)return tmp.toFixed(1)+'KB';
        		else {
        			tmp/=1000;
        			if(tmp<1000)return tmp.toFixed(1)+'MB';
        			else {
        				tmp/=1000;
        				return tmp.toFixed(1)+'GB';
        			}
        		}
        	}
        }
    }
}
</script>

<style lang="sass">
.search {
	border:solid 1px rgba(0,0,0,.15);
	-webkit-appearance:none;
	border-radius: none;
	width:300px;
	font-size:1em;
	padding:6px 10px;
}
.progress {
	margin-top:5px;
	height:5px;
	background: lightgray;
	.progress-inner {
	height:5px;
		background: #646464;
	}
}
.download-link {
	margin-top:5px;
	a {
		color:#646464;
	}
}
</style>