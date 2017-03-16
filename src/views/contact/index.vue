<template>
    <div class="template-wrapper">

        <section style="background:#3dc0f1;">
            <div class="jumbotron">
                <div class="container text-center">
                    <h2>您的信任，成就一切。</h2>
                    <p>你可以通过多种方式和我们取得联系</p>
                </div>
            </div>
        </section>

        <!--content-->
        <section>
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <address class="">
                            <p><strong>{{ record.company }}</strong></p>
                            地址：{{ record.address }}<br>
                            服务邮件：<a :href="'mailto:'+ record.serviceEmail">{{ record.serviceEmail }}</a><br>
                            合作邮件：<a :href="'mailto:'+ record.cooperateEmail">{{ record.cooperateEmail }}</a><br>
                            电话：{{ record.telephone }}<br>
                            手机：{{ record.mobile }}<br>
                            QQ：{{ record.qq }}<br>
                        </address>
                        <!--百度地图容器-->
                        <div style="height:300px;font-size:12px" id="map"></div>
                    </div>
                </div>
            </div>
        </section>

        <hr class="cut-off-divider">

        <section class="contact-icon" style="background:#d9edf7;padding:80px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 text-center">
                        <div class="thumbnail">
                            <i class="fa fa-envelope-o fa-5x"></i>

                            <div class="caption">
                                <p><a :href="'mailto:'+ record.serviceEmail">{{ record.serviceEmail }}</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3 text-center">
                        <div class="thumbnail">
                            <span class="glyphicon glyphicon-envelope fa-5x" aria-hidden="true"></span>

                            <div class="caption">
                                <p><a :href="'mailto:'+ record.cooperateEmail">{{ record.cooperateEmail }}</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3 text-center">
                        <div class="thumbnail">
                            <span class="glyphicon glyphicon-phone fa-5x" aria-hidden="true"></span>

                            <div class="caption">
                                <p>{{ record.telephone }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-3 text-center">
                        <div class="thumbnail">
                            <i class="fa fa-qq fa-5x"></i>

                            <div class="caption">
                                <p>{{ record.qq }}</p>
                            </div>
                        </div>
                    </div>

                    <!--
                    <div class="col-md-3 text-center">
                        <i class="fa fa-envelope-o fa-5x"></i>
                        <p><a :href="'mailto:'+ record.serviceEmail">{{ record.serviceEmail }}</a></p>
                    </div>
                    <div class="col-md-3 text-center">
                        <span class="glyphicon glyphicon-envelope fa-5x" aria-hidden="true"></span>
                        <p><a :href="'mailto:'+ record.cooperateEmail">{{ record.cooperateEmail }}</a></p>
                    </div>
                    <div class="col-md-3 text-center">
                        <span class="glyphicon glyphicon-phone fa-5x" aria-hidden="true"></span>
                        <p>{{ record.telephone }}</p>
                    </div>
                    <div class="col-md-3 text-center">
                        <i class="fa fa-qq fa-5x"></i>
                        <p>{{ record.qq }}</p>
                    </div>
                    -->
                </div>
            </div>
        </section>

    </div>
</template>


<script>


export default {
    name: 'contact',
    data () {
        return {
            map:{},
            record: {}
        }
    },
    components: {
    },
    created () {
        console.log("created contact")
        this.init()
        this.$store.dispatch('getContact',{}).then((res)=>{
            this.record = {...this.record, ...res}
        })
    },
    mounted () {
        console.log("mounted contact")
        this.initMap()
    },
    methods: {
        loadJScript:function() {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this.mapApi;
            document.body.appendChild(script);
        },
        init: function () {
            let url = 'http://api.map.baidu.com/api?v=2.0&ak=GdiubtoGrE6Yoi049kuBG87m'
            let script = document.createElement('script')
            script.setAttribute('src', url)
            document.getElementsByTagName('head')[0].appendChild(script)
        },
        initMap:function(){
            this.createMap();//创建地图
            this.setMapEvent();//设置地图事件
            this.addMapControl();//向地图添加控件
            this.addMapOverlay();//向地图添加覆盖物
        },
        createMap:function(){
            this.map = new BMap.Map("map");
            this.map.centerAndZoom(new BMap.Point(114.240383,22.692659),16)
        },
        setMapEvent:function(){
            this.map.enableKeyboard();
            this.map.enableDragging();
        },
        addClickHandler:function(target,window){
            target.addEventListener("click",function(){
                target.openInfoWindow(window);
            });
        },
        addMapOverlay:function(){
            let markers = [
                    {content:"地址：深圳市龙龙岗区大运软件小镇54栋306",title:"深圳市典信科技有限公司",imageOffset: {width:0,height:3},position:{lat:22.691726,lng:114.235883}}
                ];
            for(let index = 0; index < markers.length; index++ ){
                let point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
                let marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                  imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
                })});
                let label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
                let opts = {
                      width: 200,
                      title: markers[index].title,
                      enableMessage: false
                };
                let infoWindow = new BMap.InfoWindow(markers[index].content,opts);
                marker.setLabel(label);
                this.addClickHandler(marker,infoWindow);
                this.map.addOverlay(marker);
            };
        },
        addMapControl:function(){
            let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
            this.map.addControl(navControl);
        }
    }
}
</script>

<style>
.contact-icon {

}
.contact-icon p {
    margin-top: 15px;
}
.contact-icon .thumbnail {
    cursor: pointer;
    background: none;
    border:none;
}
.contact-icon .thumbnail:hover {
    color: #39f;
}

</style>
