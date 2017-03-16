<template>

    <div id="app">

        <!--header 头部-->
        <header class="header navbar-fixed-top">
            <div class="container">
                <div class="navbar navbar-default">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-navbar"
                                aria-controls="bs-navbar" aria-expanded="true">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a href="/" class="navbar-brand">Bootstrap</a>
                    </div>
                    <nav id="bs-navbar" class="navbar-collapse collapse" aria-expanded="true">
                        <ul class="nav navbar-nav">
                            <template v-for="(item, index) in menuList">
                                <router-link :to="item.link" tag="li"><a href="">{{ item.label }}</a></router-link>
                            </template>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="">主题/模板</a></li>
                        </ul>
                    </nav>
                </div>
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
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
        menuList: {}
    }
  },
  components: {

  },
  created () {
      console.log("created app")
      this.$store.dispatch('getMenuList',{}).then((res) => {
          this.menuList = {...this.menuList, ...res}
      })
  },
  mounted () {
      console.log("mounted app")
      return {
          ...mapState({
              menuList: state => state.module.menuList,
          })
      }
  }
}
</script>

<style>
#app {}

</style>
