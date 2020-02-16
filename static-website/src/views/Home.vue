<template>
  <b-jumbotron
    header="Welcome!"
    lead="SDU Sandbox Application Control"
  >

    <hr class="my-4" />
    <p>This is the landing page for the front end module of the SDU Sandbox Application Control project. See more details <a href="https://github.com/keshava/sb-aws/wiki">here</a>.</p>

    <b-button id="try-demo" variant="primary" to="/applications">Goto the App</b-button>
    &nbsp;
    <b-button variant="success" href="https://github.com/keshava/sb-aws">View Source Code</b-button>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'home',
  components: {},
};
</script>
