<template>
  <section class='gallery'>
    <div class='gallery__navigation'>
      <div class='gallery__navigation__item'>
        <div class='gallery__navigation__item__title'>
          <p>Our gallery</p>
          <hr>
        </div>
        <h2 class='gallery__navigation__item__description'>Take a look how it is cool to work from
          office</h2>
      </div>
    </div>
    <Carousel :settings='settings'
              :breakpoints='breakpoints'
              :wrap-around='true'
              :autoplay='5000'
              class='carousel gallery__carousel'>
      <Slide v-for='(slide, index) in carouselSlides' :key='index'
             class='carousel__slide'>
        <div class='carousel__item'>
          <img :src='require(`@/assets/gallery/${slide}.jpg`)' alt='gallery-image' />
        </div>
      </Slide>

      <template #addons='{ slidesCount }'>
        <navigation v-if='windowWidth >= 1200 && slidesCount > 1'>
          <template #next>
            <img src='@/assets/arrow.svg' alt='forward' />
          </template>
          <template #prev>
            <img class='arrow__back' src='@/assets/arrow.svg' alt='back' />
          </template>
        </navigation>
        <pagination />
      </template>
    </Carousel>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Navigation, Pagination, Slide,
} from 'vue3-carousel';

export default defineComponent({
  name: 'GalleryComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
    },
    breakpoints: {
      768: {
        itemsToShow: 1,
      },
      992: {
        itemsToShow: 2.5,
      },
      1200: {
        itemsToShow: 2.8,
      },
      1400: {
        itemsToShow: 3.5,
      },
      1600: {
        itemsToShow: 4.5,
      },
    },
  }),
  setup() {
    const windowWidth = window.innerWidth;
    const carouselSlides = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5', 'bg-6', 'bg-7', 'bg-8', 'bg-9'];
    return {
      carouselSlides,
      windowWidth,
    };
  },
});
</script>

<style lang='scss'>
@import 'public/styles.scss';

.arrow__back {
  transform: rotate(180deg);
}

.gallery__carousel {
  .carousel__pagination {
    padding: 0;
  }

  .carousel__pagination-button {
    margin: 0;
    width: 2rem;
    height: 0.3rem;
    border-radius: 0;
    border: 0;
    background-color: $gainsboro;
    transition-duration: 0.5s;
  }

  .carousel__pagination-button--active {
    background-color: $orange;
  }

  .carousel__prev,
  .carousel__next {
    background-color: transparent;
    background-repeat:no-repeat;
    border-radius: 0;
    width: 100px;
    height: 100px;
    font-size: calc(100px * 2 / 3);
  }

  .carousel__prev {
    top: 5%;
    left: 52%;
  }

  .carousel__next {
    top: 5%;
    right: 38%;
  }
}

@media only screen and (min-width: 1800px) {
  .gallery__carousel {
    .carousel__prev {
      left: 51%;
    }

    .carousel__next {
      right: 43%;
    }
  }
}
</style>

<style scoped lang='scss'>
@import 'public/styles.scss';

.gallery {
  width: 100%;
  margin-top: 7rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__navigation {
    max-width: 1280px;
    width: 100%;
    padding-right: 3rem;
    display: flex;
    justify-content: flex-end;

    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      &__title {
        width: 100%;
        display: flex;
        align-items: center;

        > p {
          width: 7rem;
          font-family: 'Lato', sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.875rem;
          color: #222831;
        }

        hr {
          width: 4.5rem;
          height: 0.1rem;
          border: 1px solid #222831;
          margin: 0;
        }
      }

      > h2 {
        width: 100%;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #231F20;
      }
    }
  }

  .carousel {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__slide {
      width: 600px;
      height: 600px;
    }

    &__item {
      display: flex;
      width: 420px;
      height: 350px;
      margin-right: 1rem;
    }
  }
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 1;
  transition: 0.5s;
}

.carousel__slide--visible > .carousel__item {
  opacity: 1;
}

.carousel__slide--active > .carousel__item {
  transform: scale(1.5);
  z-index: 2;
}

@media only screen and (max-width: 768px) {
  .carousel__slide {
    right: 0 !important;
  }

  .gallery {
    padding: 1rem;

    &__navigation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      &__item {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 1199px) {
  .carousel__slide {
    right: 0 !important;
  }
}

@media only screen and (min-width: 1200px) {
  .carousel__slide {
    right: 22rem;
  }
}
</style>
