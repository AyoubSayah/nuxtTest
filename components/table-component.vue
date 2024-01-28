<template>
  <table class="table">
    <thead>
      <tr v-for="column of columns">
        <th>{{ column.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="items in data">
        <td v-for="item in items">{{item}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
interface IColmun {
  name: string;
}
const { columns } = defineProps<{
  columns: IColmun[];
  data?: any[];
  enableSelection?: boolean;
}>();
</script>

<style lang="scss">

</style>
