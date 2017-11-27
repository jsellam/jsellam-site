<template>
  <div class="top">
    <a href="https://twitter.com/chloridrik" target="_blank" class="twitter-account">
        <span class="profile-picture"></span>
        <span>@chloridrik // portfolio</span>
    </a>
    <router-link :to="{path:'/'}"  v-if="currentTag != null" class="current-tag">#{{currentTag}}<i class="icon-cancel-circled-outline"></i></router-link>
  </div>
</template>

<script>

export default {
    name:"Top",

    computed:{
        currentTag:function(){
            return this.$route.params.tag;
        }
    },


    components:{},

    mounted(){
        console.log(this.$route)
    },


    data(){
        return {

        }
    },
}
</script>
