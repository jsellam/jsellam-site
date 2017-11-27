<template>
  <div class="home-view">
    <top></top>
    <project-list :items="items"></project-list>
  </div>
</template>

<script>
import store from '../store/Store'
import ProjectList from '@/components/ProjectList.vue'
import Top from '@/components/Top.vue'
export default {
    name: 'Home',

    components:{ProjectList,Top},

    data () {
        return {

        }
    },

    computed:{
      items:function(){
        return store.getters.projects
      }
    },


    mounted () {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
