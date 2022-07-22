<template>
  <section class="work-perks">
    <div class="our-support">
      <div class="perks">
        <PerkComponent
          v-for="(perk, index) in perksProps"
          :key="index"
          :src="perk.src"
          :alt="perk.alt"
          :header="perk.header"
          :description="perk.description"
        ></PerkComponent>
      </div>
    </div>
    <div class="why-WFO">
      <div class="head">
        <div class="frame">
          <p class="wfo-text">Why working from office</p>
          <hr class="wfo-hr" />
        </div>
        <h2 class="title-WFO">A place for peaceful and productive work</h2>
        <p class="wfo-text">
          If you have 5+ kids, fluffy dog, slobbery cat and a turtle you need a quite place where to
          work in order to feed all these creatures in your house. Also you might need a good
          internet speed, some cups of cofee per day and periodically a good professional advice
          from a colleague...
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PerkComponent from './PerkComponent.vue';

export default defineComponent({
  name: 'WorkPerksComponent',
  components: { PerkComponent },
  data() {
    return {
      perksProps: [
        {
          src: 'table.svg',
          alt: 'table',
          header: '10+',
          description: 'Shared tables',
        },
        {
          src: 'events.svg',
          alt: 'events',
          header: '100+',
          description: 'Recreational and educational Events',
        },
        {
          src: 'meeting.svg',
          alt: 'meeting',
          header: '4',
          description: 'Meeting rooms',
        },
        {
          src: 'wifi.svg',
          alt: 'wifi',
          header: '500 Mbps',
          description: 'Internet speed',
        },
        {
          src: 'user.svg',
          alt: 'user',
          header: '∞',
          description: 'Cups of coffee',
        },
        {
          src: 'colleagues.svg',
          alt: 'colleagues',
          header: '50+',
          description: 'Experienced colleagues',
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'public/styles.scss';
.work-perks {
  margin-top: 12.75rem;
  display: flex;
  max-width: 1280px;
  margin: 15rem auto 0;
  align-items: center;
  gap: 1rem;
}

.our-support {
  width: 50%;
}

.perks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 3rem;
}

.why-WFO {
  background-color: $black;
  width: 50%;
  height: 100%;
  text-align: left;
}

.head {
  width: 100%;
  padding: 3.2rem 1.37rem 1rem 3.37rem;
}

.frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 65%;
  color: $white;
}

.wfo-text {
  font-family: $lato;
  color: $white;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.87rem;
}

.wfo-hr {
  width: 4.5rem;
  height: 0.12rem;
  background: $white;
  align-items: center;
}

.title-WFO {
  color: $white;
  font-family: $roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2.93rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}
</style>
