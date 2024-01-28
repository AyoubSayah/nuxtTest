<template>
    <div class="container">
        <slot/>
    </div>
</template>
<style>
.container{
    padding: 24px 0;
    width: 100%;
    overflow-y: auto;
    max-height: 100vh;
}
</style>