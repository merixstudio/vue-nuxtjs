<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card v-if="item" class="elevation-12 p-20">
            <v-img
              :src=getImageSrc(item)
              :lazy-src="placeholder"
              contain
              max-height="300"
            />
            <v-card-title v-text="item.name" />
            <v-card-subtitle v-text="item.tagline" />
            <v-card-text v-text="item.description" />

            <FoodPairing :food="item.food_pairing" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'
import FoodPairing from '../../components/FoodPairing'
import placeholder from '~/static/pint.svg'

const apiUrl = 'https://api.punkapi.com/v2/beers'

export default {
  components: {
    FoodPairing
  },

  data () {
    return {
      isLoaded: false,
      error: null,
      item: {
        food_pairing: []
      },
      placeholder
    }
  },

  mounted () {
    axios.get(`${apiUrl}/${this.$route.params.id}`)
      .then((result) => {
        this.isLoaded = true
        this.item = result.data[0]
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
