<template>
    <title-component>
        Archive
    </title-component>
    <list-component :data="archivedMails" :is-selection-disabled="true" ></list-component>

</template>
<script setup>
const mailStore=useMailStore()
const {archivedMails}=storeToRefs(mailStore)



</script>