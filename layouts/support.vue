<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="pl-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SupportLayout',
  data () {
    return {
      title: "O'clock supports",
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Client / Serveur',
          to: '/front-back'
        },
      ],
    }
  }
}
</script>

<style lang="scss">
html {
  overflow: auto;
}
</style>