<template>
  <div id="app">
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import store from './store/Store'
export default {
  name: 'app',
  mounted(){
    store.dispatch("loadProjects")
    window.addEventListener('resize',this.updateSize.bind(this))
    this.updateSize();
  },

  methods:{

    updateSize()
    {
       if (window.innerWidth < 980) {
         this.$el.style.fontSize = (window.innerWidth / 980 * 16)+"px"
       }else{
          this.$el.style.fontSize = "16px"
       }
    }

  }
}
</script>