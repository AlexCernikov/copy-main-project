<template>
<!-- eslint-disable max-len -->
 <section class="our-spaces">
    <div class="our-spaces__container">
        <div class="our-spaces__top">
        <h3 class="our-spaces__title">Our Spaces </h3>
        <p class="our-spaces__text"> Our space is designed to give you a different experience when working with your team or personally </p>
        </div>
    <div class="space">
      <SpaceItemComponent
      v-for="(item, index) in space"
          :key="index"
          :name="item.name"
          :description="item.description"
          :imgUrl="item.imgUrl"
       />
    </div>
    </div>
 </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import SpaceItemComponent from '@/components/HomeViewComponents/SpaceItemComponent.vue';

export default defineComponent({
  components: {
    SpaceItemComponent,
  },
  data() {
    return {
      space: [
        {
          id: 1,
          name: 'Shared Table',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image1.png',
        },
        {
          id: 2,
          name: 'Private Space',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image2.png',
        },
        {
          id: 3,
          name: 'Meeting Room',
          description: 'Comfortable place wich you can take for a long period of time',
          imgUrl: 'image3.png',
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../../public/styles.scss";
.container{
    max-width: 1300px;
    margin: auto;
    padding: 0 10px 0 10px;
}
a{
  text-decoration: none;
}
.our-spaces{
  padding: 55px 0 55px;
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__container{
    max-width: 1300px;
    margin: auto;
    padding: 0 10px 0 10px;
  }
  &__title{
    font-family: 'Roboto Condensed';
      font-size: 40px;
      font-style: normal;
      color: #231F20;
      font-weight: 700;
      line-height: 61px;
  }
  &__text{
    width: 452px;
    text-align: right;
    font-family: 'Lato';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
  }
}
.space{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 768px){
  .space{
    flex-direction: column;
  }
  .our-spaces__top{
    flex-direction: column;
    margin: 0 auto;
  }
  .our-spaces__title{
    margin: 0;
  }
  .our-spaces__text{
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>
