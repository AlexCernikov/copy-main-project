<template>
  <div class="reviews">
    <div class="reviews__head">
      <div class="reviews__head__text">
        <div class="reviews__head__text__frame">
          <p>Reviews</p>
          <hr />
        </div>
        <h2>Why people prefer sharing tables to working from home or private spaces</h2>
      </div>
    </div>
    <Carousel
      class="reviews__carousel"
      :settings="settings"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <template #addons>
        <Navigation>
          <template #next>
            <img src="@/assets/arrow.svg" alt="forward" />
          </template>
          <template #prev>
            <img class="arrow__back" src="@/assets/arrow.svg" alt="back" />
          </template>
        </Navigation>
        <Pagination />
      </template>
      <Slide class="reviews__slide" v-for="(review, index) in reviewsProps" :key="index">
        <ReviewsCardComponent
          :key="index"
          :review="review.review"
          :src="review.src"
          :alt="review.alt"
          :name="review.name"
          :title="review.title"
        />
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, getTransitionRawChildren } from 'vue';
import {
  Carousel, Navigation, Slide, Pagination,
} from 'vue3-carousel';
import ReviewsCardComponent from './ReviewsCardComponent.vue';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'ReviewsComponent',
  components: {
    ReviewsCardComponent,
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },

  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: 'start',
      },
      breakpoints: {
        1369: {
          itemsToShow: 2.8,
        },
        1200: {
          itemsToShow: 2.3,
        },
        992: {
          itemsToShow: 1.5,
        },
      },
      totalVuePackages: null,
      reviewsProps: [
        {
          review:
            'In ac magna nulla. Proin risus sapien, ullamcorper eget rhoncus sed, varius eget ante. Nulla nec suscipit ex. Fusce porta massa a pellentesque interdum.',
          src: 'avatar1.svg',
          alt: 'user1',
          name: 'Pedro Ibanez',
          title: 'UI Designer at ISD',
        },
        {
          review:
            'Fusce nec dapibus justo. Cras quis nisi pretium sem tincidunt commodo quis vitae velit. Morbi vehicula eros eget lectus rutrum vehicula. Fusce aliquam dolor ipsum, nec auctor metus venenatis quis. Sed a scelerisque ex, eu mollis ipsum. Quisque elit ligula, venenatis sit amet est ac, iaculis vehicula erat. Phasellus nulla elit, efficitur sit amet molestie sit amet, sodales ac massa. Fusce commodo porta varius. Morbi id fermentum lorem, ut pharetra dolor.',
          src: 'avatar2.svg',
          alt: 'user2',
          name: 'Raymond Thual',
          title: 'Full-Stack developer at ISD',
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          src: 'avatar3.svg',
          alt: 'user3',
          name: 'Yuli Berlian',
          title: 'Java developer at ISD',
        },
        {
          review:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          src: 'avatar2.svg',
          alt: 'user3',
          name: 'Yuli Berlian',
          title: 'Java developer at ISD',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import 'public/styles.scss';
.arrow__back {
  transform: rotate(180deg);
}
.reviews {
  .carousel__pagination {
    margin-top: 2rem;
    padding: 0;
  }
  .carousel__pagination-button {
    margin: 0px;
    padding: 0px;
    width: 2rem;
    height: 0.3rem;
    border: 0;
    border-radius: 0;
    background-color: $gainsboro;
    transition-duration: 0.5s;
  }

  .carousel__pagination-button--active {
    background-color: #dd2c00;
    transition-duration: 0.5s;
  }
  .carousel__prev,
  .carousel__next {
    top: -14%;
    border-radius: 0;
    background-color: transparent;
    width: 100px;
    height: 100px;
    font-size: calc(100px * 2 / 3);
  }

  .carousel__prev {
    left: 70%;
  }

  .carousel__next {
    left: 75%;
  }
}
@media screen and (max-width: 966px) {
  .reviews {
    .carousel {
      width: 80%;
    }
    .carousel__viewport {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .reviews {
    .carousel__prev,
    .carousel__next {
      top: -10%;
    }
    .carousel__prev {
      left: 65%;
    }
    .carousel__next {
      left: 70%;
    }
  }
}

@media screen and (max-width: 625px) {
  .reviews {
    .carousel__prev,
    .carousel__next {
      top: -10%;
    }
    .carousel__prev {
      left: 50%;
    }
    .carousel__next {
      left: 55%;
    }
  }
}
</style>

<style scoped lang="scss">
@import 'public/styles.scss';
.reviews {
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  &__carousel {
    margin-left: calc((100% - 1280px) / 2);
  }
  &__slide {
    padding-right: 2rem;
  }
  &__head {
    display: flex;
    width: 1280px;
    margin-bottom: 1rem;
    &__text {
      width: 37%;
      &__frame {
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
          font-family: $lato;
          color: $bunker;
          font-style: normal;
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 2rem;
          margin-bottom: 0.5rem;
        }
        hr {
          width: 4.5rem;
          height: 0.1rem;
          background-color: $bunker;
          margin: 0 0 0 1rem;
        }
      }
      h2 {
        font-family: $roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        color: $aubergine;
        margin: 0;
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .reviews__head {
    width: 80%;
  }
  .reviews__head__text {
    width: 50%;
  }
  .reviews__carousel {
    margin-left: 10%;
  }
}

@media screen and (max-width: 966px) {
  .reviews__carousel {
    display: flex;
    align-items: center;
    margin: 0;
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  .reviews {
    .reviews__head {
      width: 80%;
      margin-bottom: 4rem;
    }
    .reviews__head__text {
      width: 100%;
    }
  }
}
</style>
