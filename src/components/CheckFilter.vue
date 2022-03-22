<template>
    <div class="check-filter" v-on:click="checkFilter">
        <span v-bind:class="{'checkbox':true, active: checked}"></span>
        <span class="check-filter-title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    props:["title"],
    data(){
        return {
            checked: false
        }
    },
    methods:{
        checkFilter(){
            this.checked = !this.checked;
            this.$emit('check-filter', 'genre', this.title, this.checked);
        }
    }
}
</script>

<style>
    .checkbox {
            display: inline-block;
            position: relative;
            width: 20px;
            height: 20px;
            border: 1px solid black;
            background-color: white;
            border-radius: 3px;
            user-select: none;
        }
        .active {
            border-color: black;
            background-color: orange;
            width: 20px;
            height: 20px;
            border-radius: 2px;
            }
</style>