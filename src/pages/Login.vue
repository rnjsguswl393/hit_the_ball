<template>
  <div class="page-header clear-filter" filter-color="mint">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Your ID..."
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..."
            >
            </fg-input>

            <template slot="raw-content">
              <router-link to="/">
              <div class="card-footer text-center">
                <a
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</a
                >
              </div>
              </router-link>
              <router-link to="/signup">
              <div class="pull-left">
                <h6>
                  <a class="link footer-link">Create Account</a>
                </h6>
              </div></router-link>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    // MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
