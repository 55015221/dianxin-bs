<template>

    <div id="app">

        <!--header 头部-->
        <!--<header class="header navbar-fixed-top">-->
        <header class="header">
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
                        <a href="/" class="navbar-brand">Logo</a>
                    </div>
                    <nav id="bs-navbar" class="navbar-collapse collapse" aria-expanded="true">
                        <ul class="nav navbar-nav">
                            <template v-for="(item, index) in menuList">
                                <router-link :to="item.link" tag="li"><a href="">{{ item.label }}</a></router-link>
                            </template>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="">管理后台</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <!--wrapper 主体-->
        <main class="wrapper">
            <transition name="router-fade" mode="out-in">
              <router-view></router-view>
            </transition>
        </main>

        <!--header 底部-->
        <footer class="footer">
            <div class="container">
                <div style="transform: translate(0px, 0px); opacity: 1;">
                    <span>Copyright &copy; 2017 The Project by <a href="#">Basicredit.com</a>. All Rights Reserved</span>
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

    }
  },
  components: {

  },
  computed: {
      ...mapState({
          menuList: state => state.module.menuList
      })
  },
  created () {
      console.log("created app")
      this.$store.dispatch('getMenuList',{"method":"getMenuList"}).then((res) =>{

      })
  },
  mounted () {
      console.log("mounted app")
      //初始化动画
      new WOW().init();
  }
}
</script>

<style scoped>
#app {}

.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
      opacity: 0;
}

</style>
