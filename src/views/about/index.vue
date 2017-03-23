<template>
    <div class="template-wrapper">

        <section style="background:url('/static/images/banner.png') no-repeat; background-size:cover;">
            <div class="jumbotron wow zoomIn">
                <div class="container text-center">
                    <h2>关于我们</h2>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                </div>
            </div>
        </section>

        <!--content-->
        <section>
            <div class="container content">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <p v-for="(item, index) in records.content">
                            {{ item }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>


<script>

import { mapState } from 'vuex'

export default {
    name: 'about',
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
        console.log("created about")
        this.$store.dispatch('getAbout',{ "method": "getAbout" }).then((res) => {
            console.log(res)
        })
    },
    mounted () {
        console.log("mounted about")
    },
    methods:{

    }
}
</script>

<style scoped>

.content p {
    text-indent: 24px;
    line-height: 1.8;
    margin-bottom: 15px;
}

</style>
