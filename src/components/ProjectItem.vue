<template>
  <div class="project-item" >
      <div class="wrapper">
          <img :src="'/static/img/'+item.banner" />
          <div class="title"><span>{{item.title}}</span></div>
          <div class="info-container">
            <div class="info date"><span>{{item.date}}</span></div>
            <div class="info" v-if="item.links != null && item.links.length > 0">
                <span>See on :</span>
                <a class="link" :href="link.url" target="_blank" v-for="link in item.links" :key="link.url"><i :class="link.type"></i></a>
            </div>
          </div>
          
          <div class="tag-container">
              <router-link :to="{path:'/tag/'+tag}" class="tag" v-for="tag in item.tags" :key="tag">#{{tag}}</router-link>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:"ProjectItem",

    props:["item"],

    computed:{



    }



}
</script>

<style lang="scss">

</style>
