<template>

  <div id="header">
    <img src="../public/logo.png">
    <h1>Header My theater</h1>
  </div>

  <div id="nav">
    <router-view :shows="shows"/>
  </div>

  <div id="footer">
    <h1>Footer My theater</h1>
  </div>

</template>

<script>
export default {
    data(){
    return{
        shows: []
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
      .then(listeSpectacles => this.shows = listeSpectacles) 
      .catch (e => console.log(e.message));
  }
}
</script>