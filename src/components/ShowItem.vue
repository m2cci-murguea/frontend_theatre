<template>
    <div class="wrapper"> 
        <div class="show-col-left">
            <p>ajouter photo</p>
            <!--
            <img v-bind:src="show.Poster">
            -->
            <img :src="require('@/assets/paradisesquare.jpg')">
        </div>
        <div class="show-col-right">      
            <router-link class="link" v-bind:to="{ name:'detail', params: {id: show.id}}">
                <div class="show-title">
                    <h2>{{ show.name }}</h2>
                    <h3>{{ show.typeSpectacle }}</h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    props:['show']
}
</script>

<style scoped>
    .wrapper{
        display: flex;
        border-bottom: ridge 2px black;
    }
    .show-col-left{
        height: 150px;
        margin: 10px;
        background-color: rgb(252, 243, 195);
        display: flex;
        flex-basis: 30%;
    }
    .show-col-right{
        margin: 10px;
        display: flex;
        flex-basis: 70%;
    }
    .link{
     text-decoration: none;
     color: inherit;
    }
</style>