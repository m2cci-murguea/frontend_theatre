<template>
    <div class="wrapper">
        <h1>This is the show filter</h1>
        <div class="filter-group">
            <CheckFilter v-for="genre in genres" :key="genre" v-bind:title="genre" v-on:check-filter="checkFilter"/>               
        </div> 
    </div>
</template>

<script>

    import CheckFilter from '@/components/CheckFilter'
    import genres from '@/utils/genres.js'

    export default {
        name: 'ShowFilter',
        components: {
            CheckFilter
        },
        data(){
            return {
                genres
            }
        },
        methods:{
            checkFilter(category, title, state){
                this.$emit('check-filter', category, title, state);
            }
        }
    }
</script>