<template>
  <v-content>
    <v-container
      class="fill-height"
    >
      <v-row
        align="center"
        justify="start"
      >
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card class="p-20">
            <v-img
              :src=getImageSrc(item)
              :lazy-src="placeholder"
              contain
              max-height="300"
            />
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>{{ item.tagline }}</v-card-subtitle>
            <v-card-text>{{ item.description.length > 100 ? `${item.description.substring(0, 97)}...` : item.description }}</v-card-text>
            <v-card-actions>
              <v-btn next :to="`/details/${item.id}`" text small color="orange">See details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'
import placeholder from '~/static/pint.svg'

const apiUrl = 'https://api.punkapi.com/v2/beers'

export default {

  data () {
    return {
      isLoaded: false,
      error: null,
      items: []
    }
  },

  mounted () {
    axios.get(`${apiUrl}?food=${this.$route.params.slug}`)
      .then((result) => {
        this.isLoaded = true
        this.items = result.data
      })
      .catch((error) => {
        this.isLoaded = true
        this.error = error
      })
  },

  methods: {
    getImageSrc: item => item.image_url ? item.image_url : placeholder
  }
}
</script>

<style scoped lang="scss">
  .p-20 {
    padding: 20px;
  }
</style>
