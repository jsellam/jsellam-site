<template>
  <div class="project-list">
      this is the project list
      <project-item v-for="item in items" key="item.title" :item="item"></project-item>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
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
