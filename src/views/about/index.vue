<template>
    <div class="template-wrapper">

        <div class="jumbotron" style="background:#d9edf7;">
            <div class="container">
                <h1>Marketing stuff!</h1>
                <p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                <p><a class="btn btn-lg btn-success" href="#" role="button">Get started today</a></p>
            </div>
        </div>
        <!--content-->
        <div class="container">

            <hr class="cut-off-divider">

            <div class="row">
                <div class="col-md-4">
                    <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                </div>
                <div class="col-md-4">
                    <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                    <h2>Heading</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                </div>
                <div class="col-md-4">
                    <img class="img-responsive" src="/static/images/placeholder_400x250.svg" alt="Generic placeholder image" width="400" height="250">
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                </div>
            </div>

            <hr class="cut-off-divider">

            <div class="row">
                <div class="col-md-7">
                    <h2>First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                </div>
            </div>

            <hr class="cut-off-divider">

            <div class="row">
                <div class="col-md-7 col-md-push-5">
                    <h2>Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5 col-md-pull-7">
                    <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="400x250" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                </div>
            </div>

            <hr class="cut-off-divider">

            <div class="row">
                <div class="col-md-7">
                    <h2>And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="img-responsive center-block" data-src="/static/images/placeholder_400x250.svg" alt="500x500" src="/static/images/placeholder_400x250.svg" data-holder-rendered="true">
                </div>
            </div>

            <hr class="cut-off-divider">

        </div>

    </div>
</template>


<script>


export default {
    name: 'about',
    data () {
        return {
        }
    },
    components: {
    },
    created () {
        console.log("created about")
    },
    mounted () {
        console.log("mounted about")
    },
    methods:{

    }
}
</script>

<style>

</style>
