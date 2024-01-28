<template>
  <NuxtLoadingIndicator  />
  <div class="layout">
    <SidebarLayout />
    <container-layout>
      <NuxtPage />
    </container-layout>
    <div class="backdrop-base"  v-if="modalStore.isOpen"  />

    <Transition name="right" appear>
      <modal-component v-if="modalStore.isOpen" />
    </Transition>
  </div>
</template>
<script setup>
const { getMails } = useMailStore();
const modalStore = useModalStore();
onMounted(() => {
  getMails();
});
</script>
<style lang="css">
* {
  font-family: "Plus Jakarta Sans", sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}
.layout {
  display: flex;
}
.right-leave-active {
  animation: right .5s ease-out reverse;
}
.right-enter-active {
  animation: right .5s ease-in;
}

@keyframes right {
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0%);
  }
}
.backdrop-base {
  z-index: 30;
  background-color: rgb(76, 87, 100, .8);
  width: 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
}
</style>
