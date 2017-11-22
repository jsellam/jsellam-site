<template>
  <div class="project-item" >
      <div class="wrapper">
          <img src="/static/img/armytruckdriver.jpg" />
          <h2>{{item.title}}</h2>
          <div class="date-info">{{item.date}}</div>
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

<style>
    .project-item{
        position:relative;
    }

    img{
        width:100%;
    }

    h2{
        position:absolute;
        background-color: #FFFFFF;
        font-size:2em;
        left: 0.5em;
        top:-0.3em;
        padding: 0.2em 0.6em;
        text-transform: uppercase;
        vertical-align: center;
    }

    .date-info{
        position:absolute;
        background-color: #FFFFFF;
        font-size:1em;
        left: 1em;
        top:5em;
        padding: 0.2em 0.6em;
        text-transform: uppercase;
        vertical-align: center;
    }

    .tag-container{
        position: absolute;
        bottom:1em;
        left:0.8em;
        right:1em;
        font-size:1em;
    }

    .tag{
        background-color: #FFFFFF;
        color:#000000;
        text-decoration: none;
        margin-right: 1em;
        padding:0.3em 1em;
        font-size: 1em;
        cursor: pointer;
        transition:background-color 0.2s, color 0.2s;
        display:inline-block;
    }

    .tag:hover{
        background-color: #000000;
        color:#FFFFFF;
    }
</style>
