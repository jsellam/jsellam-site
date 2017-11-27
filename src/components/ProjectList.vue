<template>
  <div class="project-list">
      <project-item v-for="item in items" key="item.title" :item="item"></project-item>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
import store from '@/store/Store'
export default {
    name:"ProjectList",

    props:{
        items:{
            type:Array,
            default:function(){
                return []
            }
        }
    },

    components:{ProjectItem},


    mounted(){
        store.dispatch("filterProjects",this.$route.params.tag)
    },

    watch:{
        "$route.params.tag":(newValue,oldValue)=>{
           
            store.dispatch("filterProjects",newValue)
        }
    },

    data(){
        return {

        }
    },
}
</script>

<style>
.project-list{
    
}

</style>
