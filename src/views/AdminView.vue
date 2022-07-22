<template>
  <div v-if="isAdmin" class="admin">
    <DashboardComponent />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardComponent from '@/components/AdminComponents/DashboardComponent.vue';

export default defineComponent({
  components: { DashboardComponent },
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  display: flex;
  padding: 2rem;
}
.admin {
  display: flex;
  .main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768pxpx) {
      padding-left: 6rem;
    }
  }
}
</style>
