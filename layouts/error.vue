<template>
  <v-app light>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      default: null,
      type: Object,
    },
  },
  data () {
    return {
      otherError: 'An error occurred',
      pageNotFound: '404 Not Found',
    };
  },
  head () {
    const title =
    this.error.statusCode === 404 ? this.pageNotFound : this.otherError;

    return {
      title,
    };
  },
  layout: 'empty',
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
