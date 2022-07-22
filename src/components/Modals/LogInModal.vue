<template>
    <div>
      <b-modal
        v-model="showModal"
        ref="modal"
        title="Enter your Log In credentials"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-title="Log In"
        :ok-disabled="handleValidLogIn"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleSubmit">
        <b-container>
          <b-form-group
            label="Email"
            label-for="email-input"
            :state="emailState">
          <b-form-input
            id="email-input"
            v-model="enteredEmail"
            placeholder="enter Email"
            :state="emailState"
            required></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="pass-input"
            :state="passwordState">
          <b-form-input
            id="pass-input"
            type="password"
            v-model="enteredPassword"
            placeholder="enter Password"
            :state="passwordState"
            required></b-form-input>
          </b-form-group>
        </b-container>
      </b-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { constants } from '../../../public/_globalConsts';

export default defineComponent({
  props: {
    show: Boolean,
  },
  data() {
    return {
      passwordFormat: constants.passwordRegex,
      emailFormat: constants.emailRegex,
      email: '',
      password: '',
      enteredEmail: '',
      enteredPassword: '',
    };
  },
  methods: {
    resetModal() {
      this.enteredEmail = '';
      this.enteredPassword = '';
      this.$emit('cancel');
    },
    handleCancel() {
      this.$emit('cancel');
    },
    handleSubmit() {
      this.email = this.enteredEmail.toLocaleLowerCase();
      this.password = this.enteredPassword;
      this.$emit('onUserSubmit', { email: this.email, password: this.password });
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
    emailState() {
      return this.emailFormat.test(this.enteredEmail);
    },
    passwordState() {
      // return this.passwordFormat.test(this.enteredPassword);
      return true;
    },
    handleValidLogIn() {
      return !(this.emailState && this.passwordState);
    },
  },
});
</script>

<style scoped lang="scss">
</style>

<style lang="scss">
@import '@/../public/styles.scss';

        .btn-primary {
            background-color: $orange;
            border: hidden;
            border-radius: 0;
        }
        .btn-secondary {
            border: hidden;
            border-radius: 0;
        }
        .btn-primary:hover {
            background-color: $orange;
            box-shadow: 4px 4px 8px #888888;
        }
        .btn-secondary:hover {
            box-shadow: 4px 4px 8px #888888;
        }
        .btn-primary:disabled, .btn-primary.disabled {
            background-color: #FF5A00;
        }
</style>
