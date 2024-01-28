<template>
  <div class="list">
    <div class="list__header">
      <label class="title__item" v-if="!isSelectionDisabled">
        <input
          class="list__checkbox"
          type="checkbox"
          @change="(e)=>handleChangeAll(e,data)"
        />
        <span> Email Selected ({{ mailStore.getSelectedMail.length }}) </span>
      </label>
      <div class="list__btns" v-show="mailStore.getSelectedMail.length>0">
        <button @click="mailStore.readSelectedMails">
          <icon-component class="icon-action" icon-name="mail" m />
          <span> Mark as read (r)</span>
        </button>
        <button  @click="mailStore.archiveSelectedMails">
          <icon-component class="icon-action" icon-name="trash" />
          <span> archive(a)</span>
        </button> 
      </div>
    </div>
    <div class="list__item" v-for="mail in data" :class="{'item-read':mail.read}"  :style="{borderBottom:data.length===1?'2px solid #e5e7eb':'0px'}">
      <input v-if="!isSelectionDisabled" class="list__checkbox" type="checkbox" v-model="mail.isSelected" />
      <span @click="()=>modalStore.openModal(mail)"> {{ mail?.subject }} </span>
    </div>
  </div>
</template>
<script lang="ts" setup>

const { data } =defineProps<{
  data: any[];
  isSelectionDisabled?: boolean;
}>()
const mailStore = useMailStore();
const  modalStore=useModalStore()

const handleChangeAll = (e:any,data:any) => {

  data?.forEach((mail:any) => {
    mail.isSelected = e.target.checked;
  });
};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #121829;
  font-weight: 700;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
  &__btns{
    display: flex;
    gap:40px;
    button{
      display: flex;
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      align-items: center;
      gap: 12px;
      color: #4B5563;
      border-radius: 5px;
      font-size: 14px;
      padding: 5px 8px;
font-weight: 600;
      &:hover{
        background-color:#ededed ;

      }
      .icon-action{
        width: 19px;
        height: 19px;
      }

    }

  }
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 24px;
    border: 2px solid #e5e7eb;
    border-bottom: 0px;
    border-left: 0px;
  }
  .item-read{
    background-color: #F3F6FB;
  }
  &__checkbox {
    width: 20px;
    height: 20px;
  }
  & span {
    cursor: pointer;
  }
  .title {
    &__item {
      display: flex;
      align-items: center;

      gap: 12px;
      padding: 24px;
    }
  }
}
</style>
