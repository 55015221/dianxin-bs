<template>
    <div class="template-wrapper">

        <section style="background:rgb(224, 243, 246);">
            <div class="jumbotron">
                <div class="container">
                    <h2>原版国内镜像</h2>
                    <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                    <p><a class="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>
                </div>
            </div>
        </section>

        <hr class="cut-off-divider">

        <!--content-->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                        <h2>原版国内镜像</h2>
                        <p>最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                        <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                        <h2>原版国内镜像</h2>
                        <p>最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                        <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                        <h2>原版国内镜像</h2>
                        <p>最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                        <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7 wow slideInLeft">
                        <h2>First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5 wow slideInRight">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7 col-md-push-5 wow slideInRight">
                        <h2>Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5 col-md-pull-7 wow slideInLeft">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>

                <hr class="cut-off-divider">

                <div class="row">
                    <div class="col-md-7 wow slideInLeft">
                        <h2>原版国内镜像 <span class="text-muted">Checkmate.</span></h2>
                        <p class="lead">最受欢迎的前端技术教程网站，但是国内用户一直不能访问，并且国内的中文翻译版本十分陈旧。因此做了个镜像，希望英文好的同学直接去看原版教程吧</p>
                    </div>
                    <div class="col-md-5 wow slideInRight">
                        <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="500x500" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>


<script>


export default {
    name: 'questions',
    data () {
        return {
        }
    },
    components: {
    },
    created () {
        console.log("created questions")
        new WOW().init();
    },
    mounted () {
        console.log("mounted questions")
    },
    methods:{

    }
}
</script>

<style>

</style>
