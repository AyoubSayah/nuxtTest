<template>
    <title-component>
        Inbox
    </title-component>
    <div class="loading" v-if="isLoading">Loading...</div>
    <list-component :data="mails" v-else></list-component>
</template>
<script setup>
const mailStore=useMailStore()
const {mails ,isLoading}=storeToRefs(mailStore)
 useKeyEvent()



</script>
<style>
.loading{
    padding: 24px;
    font-size: 20px;
    font-weight: 700;
}
</style>