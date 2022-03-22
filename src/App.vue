<template>
<div id="main">

  <div id="header">
    <img src="../public/logo.png">
    <h1>Header My theater</h1>
  </div>

<div id="overview">
  <div id="showList">
    <ShowList :shows="shows" :genre="genre" :time="time"/>
  </div>
  
  <div id="showFilter">
      <show-filter v-on:check-filter="checkFilter"></show-filter>
  </div>
</div>

  <div id="footer">
    <h1>Footer My theater</h1>
  </div>
</div>
</template>

<script>
import genres from '@/utils/genres.js'
import ShowList from '@/components/ShowList.vue'; 
import ShowFilter from '@/components/ShowFilter.vue'; 

export default {
  name: 'App',
  components: {
    ShowList,
    ShowFilter
  },
  data(){
    return{
        shows: [
          { title: 'Pulp Fiction', genre: genres.DRAMA },
          { title: 'Home Alone', genre: genres.COMEDY },
          { title: 'Austin Powers', genre: genres.COMEDY }
        ],
        genre: [],
        time: []
    }
  },
  methods:{
    checkFilter(category, title, checked){
      let data = this.$data;
      if (checked) {
        data[category].push(title);
      } else {
        let index = data[category].indexOf(title);
        if (index > -1) {
          data[category].splice(index, 1);
        }
      }
    }
  },
    mounted () {
    fetch('http://localhost:8080/CyberTheatreBackEnd/listespectacles')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("pb fecth");
        }
      })
      .then(listeSpectacles => console.log(listeSpectacles)) 
      .catch (e => console.log(e.message));
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
