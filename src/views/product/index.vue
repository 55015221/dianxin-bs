<template>
    <div class="template-wrapper">

        <section style="background:url('/static/images/banner.png') no-repeat; background-size:cover;">
            <div class="jumbotron wow zoomIn">
                <div class="container">
                    <h3>产品与服务</h3>
                    <p style="width: 60%;">集成报价单、订单、购销、交付、往来债权债务、工资、报销模块等提供用户认证以及信用指数据评估等服务 提升往来管理效率，提高往来管理效果，为客户整体业务发展提供支持
                    </p>
                </div>
            </div>
        </section>

        <!--content-->
        <section>
            <div class="container">

                <div class="row">
                    <div class="product-item col-sm-6 col-md-4 wow fadeInUp" v-bind:data-wow-delay="[(0.3*(index+1))+'s']" :key="index" v-for="(item, index) in records">
                        <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.content }}</p>
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7">
                        <h3>原版国内镜像 <span class="text-muted">Checkmate.</span></h3>
                        <p>最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="500x500" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'product',
    data () {
        return {
        }
    },
    components: {

    },
    computed: {
        ...mapState({
            records: state => state.module.records
        })
    },
    created () {
        console.log("created product")
        this.$store.dispatch('getProduct',{"method":"getProduct"}).then((res) => {

        })
    },
    mounted () {
        console.log("mounted product")
    },
    methods:{

    }
}
</script>

<style scoped>

.product-item {
    margin-bottom: 15px;
}
.product-item h3{
    font-size: 18px;
}
</style>
