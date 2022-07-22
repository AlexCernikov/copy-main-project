<template>
  <aside class="dashboard" :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="@/assets/ISD_Logo.svg" alt="isd-logo" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h1 class="title">Menu</h1>
    <div class="menu">
      <router-link class="button" to="/admin">
        <span class="material-icons">home</span>
        <span class="text">Dashboard</span>
      </router-link>
      <router-link class="button" to="/users">
        <span class="material-icons">group</span>
        <span class="text">Users</span>
      </router-link>
      <router-link class="button" to="/reservations">
        <span class="material-icons">calendar_month</span>
        <span class="text">Reservations</span>
      </router-link>
      <router-link class="button" to="/entities">
        <span class="material-icons">workspaces</span>
        <span class="text">Entities</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      is_expanded: ref(true),
    };
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
    },
  },
});
</script>

<style scoped lang="scss">
@import 'public/styles.scss';

aside {
  font-family: $lato;
  display: flex;
  flex-direction: column;
  background-color: $gray;
  color: $white;
  width: 4rem;
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0;
  }
  .logo {
    margin-bottom: 2rem;
    img {
      width: 5rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-out;
    .menu-toggle {
      transition: 0.2s ease-out;
      cursor: pointer;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      .material-icons {
        font-size: 2rem;
        color: $bunker;
      }
      &:hover {
        .material-icons {
          color: $black;
        }
      }
    }
  }
  .button .text .title {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  .title {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: $silver;
  }
  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;
      .material-icons {
        font-size: 2rem;
        color: $white;
        margin-right: 1rem;
        transition: 0.2s ease-out;
      }
      .text {
        color: $white;
        transition: 0.2s ease-out;
        font-size: 1rem;
      }
      &:hover,
      &.router-link-exact-active {
        background-color: $aubergine;
        .material-icons,
        .text {
          color: $orange;
        }
      }
    }
  }

  &.is-expanded {
    width: 250px;
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
    .button .text .title {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
