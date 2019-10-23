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
          <template v-if="isLoading">
            Loading...
          </template>
          <v-card v-else class="elevation-12 p-20">
            <v-img
              :src="getImageSrc(item)"
              :lazy-src="placeholder"
              contain
              max-height="300"
            />
            <v-card-title v-text="item.name" />
            <v-card-subtitle v-text="item.tagline" />
            <v-card-text v-text="item.description" />
            <v-card-text><strong>Brewers tips:</strong> {{ item.brewers_tips }}</v-card-text>

            <DetailList :data="item.food_pairing" icon="restaurant">
              Food Pairing
            </DetailList>
            <DetailList :data="item.ingredients" icon="mdi-beer">
              Ingredients
            </DetailList>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import DetailList from '../../components/DetailList'
import placeholder from '~/static/pint.svg'

export default {
  components: {
    DetailList
  },

  data () {
    return {
      isLoading: true,
      error: null,
      placeholder
    }
  },

  computed: mapState([
    'item'
  ]),

  async mounted () {
    this.isLoading = true
    try {
      await this.loadItem(this.$route.params.id)
    } catch (error) {
      this.error = error
    } finally {
      this.isLoading = false
    }
  },

  methods: {
    ...mapActions([
      'loadItem'
    ]),
    getImageSrc: item => item.image_url ? item.image_url : placeholder
  }
}
</script>

<style scoped lang="scss">
  .p-20 {
    padding: 20px;
  }
</style>
