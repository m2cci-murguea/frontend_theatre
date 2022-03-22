<!-- composant encore non utilisé mais il servira pour la suite-->
<template>
    <div class="wrapper">
    <div class="show-col-left">
        <img v-bind:src="show.Poster">
    </div>
    <div class="show-col-right">
        <div class="show-title">
            <h2>{{ show.Title }}</h2>
        </div>
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
    }
    .show-col-left{
        display: flex;
        flex-basis: 30%;
    }
    .show-col-right{
        display: flex;
        flex-basis: 70%;
    }
</style>