<template>
  <div id="overview">
    <div id="showList">
      <ShowList :shows="shows"/>
    </div>
    <div id="showFilter">
      <ShowFilter v-on:check-filter="checkFilter"/>
    </div>
  </div>

</template>

<script>
import ShowList from '@/components/ShowList.vue'; 
import ShowFilter from '@/components/ShowFilter.vue'; 

export default {
  name: 'App',
  props:['shows'],
  data(){
    return{
      genre: new String("test")
    }
  },
  components: {
    ShowList,
    ShowFilter
  },
  methods:{
    checkFilter(category, title){
      let data = this.$data;
      data[category] = title;
      console.log(category, data[category],title);
      console.log(this.genre);
    }
  }
}
</script>

<style>
  #overview{
    display: flex;
  }
  #header {
    padding: 2rem 0 1rem 2rem;
    display: flex;
    align-items: center;
    background-color: #ED9302;
  }
    img {
      width: 90px;
      height: 90px;
      display: inline-block;
    }

    h1 {
      display: inline-block;
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0 0 0 1rem;
      font-size: 2.5rem;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
  #footer {
    padding: 2rem 0 1rem 2rem;
    display: flex;
    align-self: flex-end;
    background-color: #ED9302;
  }
  #showList {
    background-color: antiquewhite;
    display: flex;
    flex-basis: 75%;
  }
  #showFilter {
    background-color: rgb(206, 165, 111);
    display: flex;
    flex-basis: 25%;
    border-block: black 1px;
  }
</style>
