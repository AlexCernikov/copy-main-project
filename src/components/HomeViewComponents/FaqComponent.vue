<template>
<!-- eslint-disable max-len -->
 <section class="faq">
    <div class="faq__container">
        <div class="faq__top">
        <h3 class="faq__title">Find the answers to anything you need in our Help Center</h3>
        </div>
    <div class="faq__dir">
      <FaqItemComponent
      v-for="(item, index) in faq"
          :key="index"
          :name="item.name">
      </FaqItemComponent>
    </div>
    <a href="#">
      <p class="faq__question">More questions</p>
    </a>
    </div>
 </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import FaqItemComponent from '@/components/HomeViewComponents/FaqItemComponent.vue';

export default defineComponent({
  components: {
    FaqItemComponent,
  },
  data() {
    return {
      faq: [
        {
          id: 1,
          name: 'How do I know if a space is available?',
        },
        {
          id: 2,
          name: 'Private Space',
        },
        {
          id: 3,
          name: 'Meeting Room',
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../public/styles.scss";
a{
  text-decoration: none;
}
.faq{
    &__title{
    @extend %title-font;
    text-align: center;
    width: 45%;
    margin: 115px auto 62px;
    color: $brand-color;
    }
    &__container{
      max-width: 1300px;
      margin: 0 auto;
      margin-bottom: 100px;
      padding: 0 10px 0 10px;
    }
    &__dir{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
}
.faq__question{
  color: $btn-color;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 1rem;
  &:after{
    content:"";
    position: absolute;
    background-image: url(../../assets/faqsection/arrow2.svg);
    width: 9.5px;
    height: 15px;
    top: 1px;
    right: -20px;
    background-size: cover;
  }
  &:hover::after{
    transform: rotate(90deg);
  }
}
@media screen and (max-width: 992px){
  .faq__title{
    width: 75%;
  }
}
@media screen and (max-width: 768px){
  .faq__dir{
    flex-direction: column;
    margin-top: 1.5rem;
  }
  .faq__question{
    font-size: 1.5rem;
    &:after{
    width: 12.5px;
    height: 21px;
    top: 4px;
    right: -27px;
    background-size: cover;
  }
  }
  .faq__title{
    margin: 0 auto;
  }
}
</style>
