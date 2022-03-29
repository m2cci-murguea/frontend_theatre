<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">MyTheater</span>
    </div>
  </nav>

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

<style scoped>
  .overview{
    align-items: flex-end;
  } 
</style>