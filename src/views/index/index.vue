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

        <!--content-->
        <hr class="cut-off-divider">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h2>First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7 col-md-push-5">
                        <h2>Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5 col-md-pull-7">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7">
                        <h2>原版国内镜像 <span class="text-muted">Checkmate.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
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

export default {
    name: 'index',
    data () {
        return {
        }
    },
    components: {
    },
    created () {
        console.log("created index")
    },
    mounted () {
        console.log("mounted index")
    },
    methods:{

    }
}
</script>

<style scoped>

</style>
