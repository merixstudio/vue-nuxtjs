<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <Loader v-if="isLoading" />
      <Error v-else-if="error">
        {{ error }}
      </Error>
      <NoResults v-else-if="!item">
        No results
      </NoResults>
      <ItemDetails v-else :data="item" />
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import NoResults from '../../components/NoResults'
import ItemDetails from '../../components/ItemDetails'

import placeholder from '~/static/pint.svg'

export default {
  components: {
    ItemDetails,
    Error,
    NoResults,
    Loader
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
    padding: 20px 0;
  }
</style>
