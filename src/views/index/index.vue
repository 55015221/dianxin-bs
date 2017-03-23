<template>
    <div class="template-wrapper">

        <!--carousel-->
        <section>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img class="first-slide" src="/static/images/solution.jpg" alt="First slide">

                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Example headline.</h1>

                                <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous"
                                    Glyphicon buttons on the left and right might not load/display properly due to web browser
                                    security rules.</p>

                                <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img class="second-slide" src="/static/images/b1.jpg" alt="Second slide">

                        <div class="container">
                            <div class="carousel-caption">
                                <h1>Another example headline.</h1>

                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida
                                    at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

                                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>


        <section style="background: #f8f8f8; padding:120px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6" v-for="(item ,index) in records" style="margin-bottom: 15px;">
                        <div class="col-md-4">
                            <img class="img-rounded img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                        </div>
                        <div class="col-md-8">
                            <h4>{{ item.title }} <span class="text-muted"></span></h4>
                            <p>{{ item.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--content-->

        <section class="content" v-for="(item ,index) in records" :style="'background:'+sectionBg[index]">
            <div class="container">
                <div class="row">
                    <div :class="(index%2 === 1)?'col-sm-7 wow slideInLeft':'col-sm-7 col-sm-push-5 wow slideInRight'">
                        <h3>{{ item.title }} <span class="text-muted"></span></h3>
                        <p class="lead">{{ item.content }}</p>
                    </div>
                    <div :class="(index%2 === 1)?'col-sm-5 wow slideInRight':'col-sm-5 col-sm-pull-7 wow slideInLeft'">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
    name: 'index',
    data () {
        return {
            sectionBg: [
                "#fff", "#d2eafb", "#fde3cf", "#cfedf0", "#f7f7f7"
            ]
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
        console.log("created index")
        this.$store.dispatch('getProduct',{ "method": "getProduct" }).then((res) => {

        })
    },
    mounted () {
        console.log("mounted index")
    },
    methods:{

    }
}
</script>

<style scoped>
.carousel, .listbox {
    max-height: 300px;
    overflow: hidden;
}

.content {
    padding-top: 120px;
    padding-bottom: 120px;
}

</style>
