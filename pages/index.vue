<template>
  <v-container>
    <p>Hello world</p>
  </v-container>
</template>
<script>
export default {
  name: 'Index',
  nuxtI18n: {
    paths: {
      fr: '/',
      en: '/'
    }
  },
  head () {
    return {
      title: this.$t('home')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
<i18n>
{
  "fr": {
    "home": "Accueil"
  },
  "en": {
    "home": "Home"
  }
}
</i18n>
