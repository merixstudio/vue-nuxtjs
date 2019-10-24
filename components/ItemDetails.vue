<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="6"
      lg="4"
    >
      <v-card class="elevation-12 p-20">
        <v-img
          :src="getImageSrc(data)"
          :lazy-src="placeholder"
          contain
          max-height="400"
        />
        <v-card-title v-text="data.name" />
        <v-card-subtitle v-text="data.tagline" />
        <v-card-text v-text="data.description" />
        <v-card-text><strong>Brewers tips:</strong> {{ data.brewers_tips }}</v-card-text>

        <DetailList :data="data.food_pairing" icon="restaurant">
          Food Pairing
        </DetailList>
        <DetailList :data="data.ingredients" icon="mdi-beer">
          Ingredients
        </DetailList>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DetailList from './DetailList'

import placeholder from '~/static/pint.png'

export default {
  components: {
    DetailList
  },

  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  data () {
    return {
      placeholder
    }
  },

  methods: {
    getImageSrc: item => item.image_url || placeholder
  }
}
</script>

<style scoped lang="scss">
  .p-20 {
    padding: 20px 0;
  }
</style>
