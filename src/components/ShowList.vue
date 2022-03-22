<template>
    <div class="wrapper" v-bind:genre="genre"  v-bind:time="time">
        <h1>This is the show list</h1>
        <div v-for="show in filteredShows" :key="show">{{ show.title }}</div>
    </div>
</template>

<script>
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
            return this.genre.find(genre => show.genre === genre);
        }
        }
    }
}
</script>
