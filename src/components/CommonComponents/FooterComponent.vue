<template>
  <div class="footer-container">
    <div class="footer-info">
      <div class="info-section">
        <img class="isd-logo" src="@/assets/ISD-white-logo.svg" alt="ISD-Logo">
        <p>
          Even though you can work from home, you're highly encouraged to use one of the shared
          tables
          in case of need
        </p>
        <div class="logos-section">
          <img src="@/assets/instagram.svg" alt="instagram-logo">
          <img src="@/assets/youtube.svg" alt="youtube-logo">
          <img src="@/assets/facebook.svg" alt="facebook-logo">
        </div>
      </div>
      <div class="links-section">
        <div class="spaces">
          <h4 class="section-title">Spaces</h4>
          <router-link to="/">Shared tables</router-link>
          <router-link to="/">Meeting rooms</router-link>
          <router-link to="/">Event spaces</router-link>
          <router-link to="/">Private spaces</router-link>
          <router-link to="/">Kitchen</router-link>
        </div>
        <div class="spaces">
          <h4 class="section-title">Company</h4>
          <router-link to="/">About Us</router-link>
          <router-link to="/">Pricing</router-link>
          <router-link to="/">Careers</router-link>
          <router-link to="/">Press</router-link>
        </div>
        <div class="spaces">
          <h4 class="section-title">Support</h4>
          <router-link to="/">FAQs</router-link>
          <router-link to="/">Privacy Policy</router-link>
          <router-link to="/">Help</router-link>
        </div>
        <div class="spaces">
          <h4 class="section-title">Contact Us</h4>
          <div class="contact-section">
            <img src="@/assets/message.svg" alt="email">
            <router-link to="/">test@email.com</router-link>
          </div>
          <div class="contact-section">
            <img src="@/assets/location.svg" alt="location">
            <router-link to="/">Bulgara 33/1, Chisinau</router-link>
          </div>
          <div class="contact-section">
            <img src="@/assets/mobile.svg" alt="mobile">
            <router-link to="/">(+373) 123456789</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
$footer-color: #030303;
$section-color: #FFFFFF;

.footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: $footer-color;
  width: 100%;
  padding: 3rem;

  .footer-info {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 3rem;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    padding-left: 5rem;

    .isd-logo {
      margin-left: -1.1rem;
    }

    p {
      color: $section-color;
      opacity: 0.5;
      padding-bottom: 0.5rem;
    }

    .logos-section {
      display: flex;
      gap: 0.5rem;
    }
  }

  .links-section {
    display: flex;
    justify-content: space-around;
    flex: 3;
    width: 100%;

    .spaces {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .section-title {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.875rem;
        color: $section-color;
        opacity: 0.5;
      }

      a {
        text-decoration: none;
        color: $section-color;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.625rem;
      }

      .contact-section {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.2rem;
      }
    }
  }

}
</style>
