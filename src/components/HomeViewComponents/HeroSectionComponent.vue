<template>
<div class="hero--container__wrapper">
  <div class="hero--container">
    <div class="hero--top">
      <h2><span>Book</span> a perfect spot in the office</h2>
      <p class="hero--description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nemo nihil, placeat asperiores totam consectetur,
        dolorum numquam animi minima, laudantium quis molestias
        saepe quam velit quisquam atque minus assumenda reprehenderit id!</p>
    </div>
    <div class="hero--bot">
      <div class="hero-bottom-wrapper">
        <div class="hero--form__wrapper">
          <div class="hero--form">
            <div class="form-name">Find your Space Now</div>
            <div class="form-question">
              <div class="left-content">
                <p>Type</p>
                <p>Private Space</p>
              </div>
              <div class="right-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                            transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                </svg>
              </div>
            </div>
            <div class="form-question">
              <div class="left-content">
                <p>Date</p>
                <p>9 Aug</p>
              </div>
              <div class="right-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                            transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                </svg>
              </div>
            </div>
            <div class="form-question">
              <div class="left-content">
                <p>Time</p>
                <p>9:00 - 18:00</p>
              </div>
              <div class="right-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                  <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                            transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                </svg>
              </div>
            </div>
            <div class="form-submit">Find my Space</div>
            </div>
        </div>
        <div class="img-background">
          <img src="@/assets/900x600_img.png" alt="office_image">
        </div>

          </div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSectionComponent',
});
</script>

<style scoped lang="scss">

@import 'public/styles.scss';

img {
  width: 45vw;
  min-width: 500px;
  z-index: -12;
}

.hero--container__wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.hero--container {
  width: min(1280px, 90%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  color: $orange;
}

h2 {
  font-family: $roboto;
  font-style: normal;
  color: $aubergine;
  font-weight: 700;
  font-size: 52px;
  line-height: 61px;
  margin-right: 50px;
  margin-top: 0;
  text-align: left;
  margin-left: 50px;
}

.hero--description {
  margin-top: 0;
  font-family: $lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: right;
  margin-right: 50px;
}

.hero--top {
  display: grid;
  grid-template-columns:50% 50%;
  width: 100%;
  margin-top: 50px;
}

.hero--bot {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bottom-wrapper {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero--form__wrapper {
  width: 100px;
}
.hero--form {
  position: relative;
  width: 350px;
  height: 450px;
  background-color: $aubergine;
  display: grid;
  font-size: 1.5rem;
  flex-direction: column;
}

.hero--form > div {
  width: 80%;
  background-color: $black;
  margin: 15px auto;
  color: rgb(234, 234, 234);

}

.hero--form > div:last-child {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $orange;
  color: white;
  font-family: $roboto;
}

.hero--form > div:first-child {
  margin-top: 20px;
  background: none;
  font-size: 2rem;
  color: rgb(235, 235, 235);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $roboto;
}

.left-content > p {
  margin: 0;
  padding: 0;
}

.form-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
}

.form-question > div {
  margin: 0 40px;
}

.form-question > div > p:first-child {
  margin-bottom: 5px;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.left-content > p {
  font-size: 1rem;
}
</style>
