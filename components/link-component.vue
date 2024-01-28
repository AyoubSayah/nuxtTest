<template>
  <NuxtLink :to="to" class="link" active-class="active_link"><slot /></NuxtLink>
</template>
<script lang="ts" setup>
defineProps<{
  to: string;
}>();
</script>
<style lang="scss">

.link {
  border-radius: 9rem;
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all .5s;
  gap: 12px;
  color:#4B5563;
  // fill:#4B5563;
  font-weight: bold;
  font-size: 16px;
}
.active_link {
  background-color: #d6e2fb;
  color: #121829;
  fill:#121829;
}
</style>
