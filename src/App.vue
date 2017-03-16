<template>

    <div id="app">

        <!--header 头部-->
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
                        <router-link to="/index" tag="li"><a href="">首页</a></router-link>
                        <router-link to="/product" tag="li"><a href="">产品与服务</a></router-link>
                        <router-link to="/about" tag="li"><a href="">关于我们</a></router-link>
                        <router-link to="/contact" tag="li"><a href="">联系我们</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="http://mb.bootcss.com">主题/模板</a></li>
                    </ul>
                </nav>
            </div>
        </header>

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

        <hr class="cut-off-divider">

        <!--header 底部-->
        <footer class="footer">
            <div class="container">
                <div style="transform: translate(0px, 0px); opacity: 1;">
                    <span id="footer_0_0-content">Copyright &copy; 2017 The Project by <a href="#">Ant Motion</a>. All Rights Reserved</span>
               </div>
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
