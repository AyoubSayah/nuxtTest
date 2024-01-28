<template>
<img :src="`icons/${iconName}.svg`" :alt="iconName" />
</template>

<script lang="ts" setup>
defineProps<{
iconName:string
}>()

</script>
