<template>
  <v-row
    align="center"
    justify="start"
  >
    <v-col
      v-for="{id, name, tagline, image_url, description} in data"
      :key="id"
      cols="12"
      sm="6"
      md="4"
      xl="3"
    >
      <v-card class="p-20">
        <v-img
          :src="getImageSrc(image_url)"
          :lazy-src="placeholder"
          contain
          max-height="300"
        />
        <v-card-title>{{ name }}</v-card-title>
        <v-card-subtitle>{{ tagline }}</v-card-subtitle>
        <v-card-text>{{ description.length > 100 ? `${description.substring(0, 97)}...` : description }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            nuxt
            :to="`/details/${id}`"
            text
            small
            color="orange"
          >
            See details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import placeholder from '~/static/pint.png'

export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data () {
    return {
      placeholder
    }
  },

  methods: {
    getImageSrc: imageUrl => imageUrl || placeholder
  }
}
</script>

<style scoped lang="scss">
  .p-20 {
    padding: 20px 0;
  }
</style>
