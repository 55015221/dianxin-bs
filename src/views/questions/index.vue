<template>
    <div class="template-wrapper">

        <section style="background:url('/static/images/banner.png') no-repeat; background-size:cover;">
            <div class="jumbotron wow zoomIn">
                <div class="container">
                    <h2>原版国内镜像</h2>
                    <p style="width: 60%;">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.</p>
                </div>
            </div>
        </section>

        <!--content-->
        <section>
            <div class="container">
                <ul class="list-unstyled">
                    <li v-for="(item, index) in records" data-wow-delay="0.3s" class="wow bounceInRight">
                        <h3>{{ item.title }}</h3>
                        <p class="text-muted">{{ item.content }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>


<script>

import { mapState } from 'vuex'

export default {
    name: 'questions',
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
        console.log("created questions")
        this.$store.dispatch('getQuestions', { "method":"getQuestions" }).then((res) => {
        })
    },
    mounted () {
        console.log("mounted questions")
    },
    methods:{

    }
}
</script>

<style scoped>
.list-unstyled li {
    margin: 10px auto;
}
.list-unstyled h3 {
    margin-bottom: 10px;
    font-size: 16px;
}
</style>
