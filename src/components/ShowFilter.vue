<template>
    <div class="wrapper">
        <h1>This is the show filter</h1>
        <div class="genre-filter">
            <select id="test" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="checkFilter($event)">
                <option selected>Open this select menu</option>
                <option v-for="(genre, index) in genres" :key="genre" :value="index">{{genre}}</option>
            </select>
        </div>
    </div>
</template>

<script>

    import genres from '@/utils/genres.js'

    export default {
        name: 'ShowFilter',
        components: {
        },
        data(){
            return {
                genres,
                resultat:""
            }
        },
        methods:{
            checkFilter(event){
                this.resultat = event.target.value.toLowerCase();
                this.$emit('check-filter', 'genre', new String(this.resultat));
                console.log("* " +typeof( new String(this.resultat)));
            } 
        }
    }
</script>