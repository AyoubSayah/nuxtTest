<template>
  <div class="modal">
    <div class="modal__close" @click="closeModal"></div>
    <div class="modal__content">
      <div class="modal__btns">
        <button @click="closeModal">
          <icon-component class="icon-action" icon-name="close" />
          <span> Close (Esc)</span>
        </button>
        <button @click="() => handleEvent(readMail, mail)">
          <icon-component class="icon-action" icon-name="mail" />
          <span> Mark as read (r)</span>
        </button>
        <button @click="() => handleEvent(archiveMail, mail)">
          <icon-component class="icon-action" icon-name="trash" />
          <span> archive(a)</span>
        </button>
      </div>
      <span class="modal__subject">
        {{ mail?.subject }}
      </span>
      <span class="modal__body">
        {{ mail?.body }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { mail, closeModal } = useModalStore();
const { archiveMail, readMail } = useMailStore();
useModalEvent()

const handleEvent = (fn: any, mail?: Imail) => {
  if (mail) {
    fn(mail.id);
  }
};
defineProps<{
  showModal: boolean;
}>();
</script>

<style lang="scss">
.modal {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 30;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
&__close{
  width: 100%;
  height: 100%;
}
  &__btns {
    display: flex;
    padding-bottom: 32px;
    margin-left: -0.5rem;
    gap: 40px;
    button {
      display: flex;
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      align-items: center;
      gap: 12px;
      color: #4b5563;
      border-radius: 5px;
      font-size: 14px;
      padding: 5px 8px;
      font-weight: 600;
      &:first-child {
        margin-right: auto;
      }
      &:hover {
        background-color: #ededed;
      }
      .icon-action {
        width: 19px;
        height: 19px;
      }
    }
  }
  &__subject {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
    display: block;
  }
  &__body {
    font-size: 14px;
    font-weight: 500;
  }
  &__content {
    z-index: 40;
    width: 752px;
    background-color: white;
    height: 100%;
    flex-shrink: 0;
    max-width: 100%;
    padding: 32px;
  }
}
</style>
