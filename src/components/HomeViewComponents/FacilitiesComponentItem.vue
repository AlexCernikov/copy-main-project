<template>
  <img :src="require(`@/assets/facilities/` + imgUrl)" alt="">
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FacilitiesComponentItem',
  props: {
    imgUrl: {
      type: String,
    },
    title: {
      type: String,
    },
    classname: {
      type: String,
    },
  },
});
</script>
