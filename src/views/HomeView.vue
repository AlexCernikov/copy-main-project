<template>
  <div class='home'>
    <HeroSectionComponent />
    <SpaceMainComponent />
    <FaqComponent />
    <WorkPerksComponent />
    <FacilitiesComponent />
    <GalleryComponent />
    <ReviewsComponent />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import HeroSectionComponent from '@/components/HomeViewComponents/HeroSectionComponent.vue';
import SpaceMainComponent from '@/components/HomeViewComponents/SpaceMainComponent.vue';
import FaqComponent from '@/components/HomeViewComponents/FaqComponent.vue';
import FacilitiesComponent from '@/components/HomeViewComponents/FacilitiesComponent.vue';
import GalleryComponent from '@/components/HomeViewComponents/GalleryComponent.vue';
import WorkPerksComponent from '../components/HomeViewComponents/WorkPerksComponent.vue';
import ReviewsComponent from '../components/HomeViewComponents/ReviewsComponent.vue';

export default defineComponent({
  name: 'app',
  components: {
    GalleryComponent,
    HeroSectionComponent,
    SpaceMainComponent,
    FaqComponent,
    WorkPerksComponent,
    FacilitiesComponent,
    ReviewsComponent,
  },
});
</script>

<style scoped lang='scss'>

</style>
