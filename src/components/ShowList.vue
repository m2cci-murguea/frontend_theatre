<template>
    <div class="wrapper">
        <div id="test" v-bind:genre="genre">
            {{genre}}
            test
        </div>
        <h1>This is the show list</h1>
        <!--
        <div v-if="filteredShows.length">
            <ShowItem v-for="show in filteredShows" :key="show" v-bind:show="show"/>
        </div>
        <div v-else>
            <p>Aucuns résultats...Faites une nouvelle sélection</p>
        </div>
        -->

    </div>
</template>

<script>
//import ShowItem from '@/components/ShowItem.vue'
export default {
    props: {
        shows: {
            type: Array,
            default(){
                return [];
            }
        },
        genre: {
            type: String,
            default(){
                return new String("test");
            }
        }

    },
    computed:{
        filteredShows(){
            return this.genre
        }
    },
    /*methods:{
        showPassesGenreFilter(show){
            if (!this.genre.length) {
                return true;
            } else {
                return this.genre.find(genre => show.typeSpectacle === genre);
            }
        }
    },
    components:{
        ShowItem
    }*/
}
</script>

<style scoped>
    #test{
        background-color: red;
    }
</style>