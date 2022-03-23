<template>
    <div v-if="show" id="detail">
        <ShowItem v-bind:show="show"/>
    </div>
</template>
<script>
import ShowItem from '@/components/ShowItem.vue'

export default {
    props: ['shows'],
    computed: {
            show() {
                let show = this.shows.find(show => show.id === this.$route.params.id);
                return show ? show : null;
            }
        },
        components: {
            ShowItem
        }
}
</script>