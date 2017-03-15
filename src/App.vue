<template>

    <div id="app">

        <!--header 头部
        <header class="header navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-navbar"
                            aria-controls="bs-navbar" aria-expanded="true">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="../" class="navbar-brand">Bootstrap</a>
                </div>
                <nav id="bs-navbar" class="navbar-collapse collapse" aria-expanded="true">
                    <ul class="nav navbar-nav">
                        <li><a href="/index">起步</a></li>
                        <li><a href="../css/">全局CSS 样式</a></li>
                        <li class="active"><a href="/about">组件</a></li>
                        <li><a href="http://www.youzhan.org">网站实例</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="http://mb.bootcss.com">主题/模板</a></li>
                    </ul>
                </nav>
            </div>
        </header>-->

        <!--wrapper 主体-->
        <main class="wrapper">
            <transition
                enter-class=""
                enter-active-class="animated fadeIn"
                leave-class=""
                leave-active-class=""
                >
                <router-view></router-view>
            </transition>
        </main>

        <!--header 底部-->
        <footer class="footer">
            <div class="container">
                <p class="text-muted">Place sticky footer content here.</p>
            </div>
        </footer>

    </div>

</template>

<script>

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {

  },
  created () {
      console.log("created app")
  },
  mounted () {
      console.log("mounted app")
  }
}
</script>

<style>
#app {}

</style>
