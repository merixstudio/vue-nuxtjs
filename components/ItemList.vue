<template>
  <v-row
    align="center"
    justify="start"
  >
    <v-col
      v-for="item in data"
      :key="item.id"
      cols="12"
      sm="4"
      md="3"
    >
      <v-card class="p-20">
        <v-img
          :src="getImageSrc(item)"
          :lazy-src="placeholder"
          contain
          max-height="300"
        />
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.tagline }}</v-card-subtitle>
        <v-card-text>{{ item.description.length > 100 ? `${item.description.substring(0, 97)}...` : item.description }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            nuxt
            :to="`/details/${item.id}`"
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
      default: () => {
        return []
      }
    }
  },

  data () {
    return {
      placeholder
    }
  },

  methods: {
    getImageSrc: item => item.image_url ? item.image_url : placeholder
  }
}
</script>

<style scoped lang="scss">
  .p-20 {
    padding: 20px 0;
  }
</style>
