<template>
  <q-page class="column items-center">
    <!-- <img src="~assets/quasar-logo-full.svg"> -->
    <pre class="console bg-black text-white">
      <p>The api url is</p>{{envHelper('API_URL')}}
    </pre>
  </q-page>
</template>

<style>
  .console {
    padding: 10px;
    max-width: 550px;
  }
</style>

<script>
export default {
  name: 'PageIndex',
  mounted () {
    let x = process.env
    console.log(x)
  },
  computed: {
    envHelper(){
      return env
    }
  }
}
</script>
