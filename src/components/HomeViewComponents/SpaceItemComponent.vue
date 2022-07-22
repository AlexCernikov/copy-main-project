<template>
    <div class="space__item" @click="goToPageSpaces" @keypress="bar">
      <div class="space__img">
<img class="space__images"
              :src="require(`@/assets/spacesection/` + imgUrl)" alt="image">
      </div>
                <div class="space__button">
                  <img class="space__svg" src="../../assets/spacesection/arrow.svg" alt="svg">
                </div>
                <div class="space__hover">
                  <div class="space__hover-front">
                    <img class="space__hover-lines"
                    src="../../assets/spacesection/lines.svg" alt="lines">
                  <h6 class="space__hover-title">
                 {{name}}
                </h6>
               <p class="space__hover-text">
                {{description}}
               </p>
               <button class="space__hover-btn">Check avaibility
                    <img class="space__hover-svg"
                    src="../../assets/spacesection/arrow.svg" alt="svg">
                  </button>
                  </div>
             </div>
             <div class="space__info">
               <p class="space__info-text">
                {{name}}
               </p>
               </div>
             </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'spaceSectionComponent',
  props: {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
  },
  methods: {
    goToPageSpaces() {
      this.$router.push('/ourSpacesView');
    },
  },
});
</script>
<style scoped lang="scss">
@import "../../../public/styles.scss";
a{
  text-decoration: none;
}
.space{
  &__item{
    position: relative;
    max-width: 350px;
    height: 467px;
    margin-right: 10px;
    cursor: pointer;
  }
  &__item:last-child{
    margin-right: 0;
  }
  &__info-text{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222831;
    margin: 20 0;
  }
  &__button{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    bottom: 48px;
    width: 72px;
    height: 72px;
    background-color: $btn-color;
  }
    &__item:hover{
      .space__hover{
      opacity: 1;
      z-index: 1;
      }
    }
  &__svg{
    width: 15.5px;
    height: 10px;
  }
  &__img{
    max-width: 350px;
    height: 419px;
    margin-bottom: 0.9rem;
  }
  &__images{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &__hover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #231F20;
    color:#ffffff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: -1;
    transition: all .6s;
  }
  &__hover-front{
    background-color: rgba(16, 55, 92, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 70px 40px;
  }
  &__hover-lines{
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.5;
  }
  &__hover-title{
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }
  &__hover-text{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
  }
  &__hover-btn{
    position: absolute;
    background-color: #FF5A00;
    width: 252px;
    height: 72px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    border: none;
  }
  &__hover-svg{
    padding-left: 30px;
  }
}
@media screen and (max-width: 768px){
  .space__item{
    margin: 0 0 2.2rem 0;
  }
}
</style>
