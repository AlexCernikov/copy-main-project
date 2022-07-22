<template>
<div class="facilities--container">
    <div class="facilities--container__inner">
        <div class="facilities--header">
            <p class="facilities--title">
                Our Facilities
            </p>
            <h2 class="facilities--description">All facilities are designed to meet all
                 your needs</h2>
        </div>
        <div class="facilities--gallery">
            <div class="facilities-list">
                <ul>
                <li v-for="(item, index) in space"
                    :key="index"
                    @click="handleClick(index)"
                    @keydown="handleClick(index)"
                    :class="{selected: activePic==index ? true: false}"
                    >
                {{item.title}}</li>
                </ul>
            </div>
            <div class="facilities-image">
                <FacilitiesComponentItem   v-for="(item, index) in space"
                :key="index"
                :imgUrl="item.imgUrl"
                class="hidden"
                :class="{active: activePic==index ? true : false}"
                />
            </div>
        </div>
    </div>
</div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

import FacilitiesComponentItem from '@/components/HomeViewComponents/FacilitiesComponentItem.vue';

export default defineComponent({
  components: {
    FacilitiesComponentItem,
  },
  data() {
    return {
      activePic: 0,
      space: [
        {
          imgUrl: 'parking_places.jpg',
          title: '10 free private parking places',
        },
        {
          imgUrl: 'office_table.jpg',
          title: 'Comfortable tables',
        },
        {
          imgUrl: 'cozy_office.jpg',
          title: 'Cozy relax area',
        },
        {
          imgUrl: 'office_coffee.jpg',
          title: 'Tasty coffee and tea',
        },
        {
          imgUrl: 'office_kitchen.jpg',
          title: 'Equipped kitchen',
        },
      ],
    };
  },
  methods: {
    handleClick(value:any) {
      this.activePic = value;
    },
  },
  name: 'FacilitiesComponent',
});

</script>

<style scoped lang="scss">

@import 'public/styles.scss';

h2 {
    font-family: $roboto;
    font-size: clamp(2rem, 3vw, 4rem);
}

p {
    font-family: $lato;
    font-size: clamp(1.5rem, 2vw, 2rem);
}

img {
    width: 50vw;
    padding-left: 20px;
}

.hidden {
    display: none;
}
.active {
    display: block;
    /* The way it works is that it applies first hidden
    and then active class ONLY for the element that was clicked */
}

.selected {
    background-color: $orange;
}

.facilities--gallery {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.facilities--container {
  margin-top: 100px;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.facilities--container__inner {
    width: min(1280px, 90%);
}

ul {
    margin-top: 30px;
    list-style: none;
    padding: 0;
}

li {
    padding: 5%;
    margin-bottom: 10px;
    width: 220px;
    font-size: clamp(1rem, 1.5vw, 3rem);
}

@media only screen and (max-width: 700px) {
  .facilities--gallery {
    flex-direction: column;
  }
  img {
    width: 90vw;
  }
  li {
    margin-bottom: 2px;
    padding: 4%;
  }
}

li:hover {
    background-color: $orange;
    cursor: pointer;
}

</style>
