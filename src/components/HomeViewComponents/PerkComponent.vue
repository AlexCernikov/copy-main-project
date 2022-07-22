<template>
  <div class="perk-container">
    <img class="perk-image" :src="require('@/assets/' + src)" alt="{{alt}}" />
    <div class="text-container">
      <h1 class="perk-header">{{ header }}</h1>
      <p class="perk-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  name: 'PerkComponent',
});
</script>

<style scoped lang="scss">
@import '@/assets/fonts/fonts.scss';

.perk-container {
  display: flex;
  width: 100%;
}

.perk-image {
  width: 2rem;
  height: 2rem;
  margin-top: 0.25rem;
  margin-right: 1.5rem;
}

.perk-header {
  font-size: 2rem;
  line-height: 2.37rem;
  font-weight: 400;
  font-family: $roboto;
  margin: 0;
  text-align: left;
}

.perk-description {
  font-family: $lato;
  font-style: normal;
  font-weight: 400;
  margin-top: 0.5rem;
  color: #9a9a9a;
  text-align: left;
  width: 100%;
}
</style>
