<template lang="jade">
	.download-page.page
		.panel
			.panel-header(v-if="id")
				.left
					.title {{id}}
				.right
					.btn(@click="clickDownload") DOWNLOAD
			.panel-content(:style="{marginTop:!id?'0':null}")
				.file(v-if="errorText") {{errorText}}
				.file.file-download(v-for="file in files",v-if="!errorText",@click="clickDownloadFile(file)")
					.title {{file.filename}} ({{filesizeStr(file.size)}})
</template>
<script>
var request = require('superagent');
module.exports = {
    name: 'Download',
    data: function() {
        return {
            id: '',
            errorText: '',
            files: []
        }
    },
    route: {
        data: function(_route) {
            var id = _route.to.params.id;
            return new Promise(function(_succ, _fail) {
                request
                    .get('api/v1/code/' + id)
                    .end(function(err, res) {
                        if (err) _fail(err);
                        else {
                            var data = JSON.parse(res.text);
                            if (data.code)
                                _fail(data.message);
                            else
                                _succ(data.data);
                        }
                    })
            }).then(function(data) {
                return {
                    id: id,
                    files: data
                }
            }).catch(function(e) {
                return {
                    errorText: e
                }
            })
        }
    },
    methods: {
        clickDownload: function() {
            window.open('api/v1/download/' + this.id);
        },
        clickDownloadFile: function(file){
        	window.open('api/v1/download/'+this.id+'/file/'+encodeURIComponent(file.filename));
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
.file-download {
	cursor:pointer;
}
.file-download:hover {
	background: rgba(0,0,0,.05);
}
</style>