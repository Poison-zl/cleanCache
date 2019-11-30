/*
* author:aggerChen
*/
var vueApp = new Vue({
    el: '#main',
    data: {
        page:1,
        form:{
            time:'1',
            type:[],
        }
    },
    computed:{
      getData:function(){
          var data = {};
          for(var x = 0; x < this.form.type.length;x++){
              data[this.form.type[x]] = true
          }
          return data
      }
    },
    mounted: function () {
        var _this = this;
    },
    methods:{
        clearDefault:function(){
            this.form.type = ['appcache','cache','localStorage','serverBoundCertificates','fileSystems']
            this.clear()
        },
        clear:function(){
            var _this = this;
            chrome.runtime.sendMessage({
                msg: 'clearCache',
                data: _this.getData,			//获取清除选项
                days: _this.form.time		//获取清除多长时间
            },function(response){
                console.log('ok')
            });
        }
    }

})