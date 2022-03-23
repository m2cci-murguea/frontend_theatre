<template>
    <div class="wrapper" v-bind:genre="genre"  v-bind:time="time">
        <h1>This is the show list</h1>
        <div v-if="filteredShows.length">
            <ShowItem v-for="show in filteredShows" :key="show" v-bind:show="show"/>
        </div>
        <div v-else>
            <p>Aucuns résultats...Faites une nouvelle sélection</p>
        </div>
    </div>
</template>

<script>
import ShowItem from '@/components/ShowItem.vue'
export default {
    props: {
        shows: {
            type: Array,
            default(){
                return [];
            }
        },
        genre: {
            type: Array,
            default(){
                return [];
            }
        },
        time: {
            type: Array,
            default(){
                return [];
            }
        }

    },
    computed:{
        filteredShows(){
            return this.shows.filter(this.showPassesGenreFilter);
        }
    },
    methods:{
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
    }
}
</script>
