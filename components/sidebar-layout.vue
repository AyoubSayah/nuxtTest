<template>
  <aside class="sidebar">
    <icon-component class="sidebar__logo" iconName="logo" />
    <div class="sidebar__links">
      <link-component to="inbox">
        <icon-component class="sidebar__icon" iconName="inbox" />
        <span> Inbox </span>
        <span class="sidebar__number">{{ mailStore.mails.length }}</span>
      </link-component>
      <link-component to="archive">
        <icon-component class="sidebar__icon" iconName="archive" />
        <span> Archive </span>
        <span class="sidebar__number">{{
          mailStore.archivedMails.length
        }}</span>
      </link-component>
      <link-component class="sidebar__logout" to="logout">
        <icon-component class="sidebar__icon" iconName="logout" />
        <span> Logout </span>
      </link-component>
    </div>
  </aside>
</template>

<script setup>
const mailStore = useMailStore();
</script>

<style lang="scss">
.sidebar {
  height: 100vh;
  padding: 20px 10px;
  width: 261px;
  border-right: 2px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__links {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-top: 32px;
  }
  &__logout {
    margin-top: auto;
  }
  &__logo {
    margin-left: 14px;
    width: 40px;
    height: 20px;
  }
  &__number {
    margin-left: auto;
  }
}
</style>
