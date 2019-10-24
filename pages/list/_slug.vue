<template>
  <v-content>
    <v-container class="fill-height">
      <Loader v-if="isLoading" />
      <Error v-else-if="error">
        {{ error }}
      </Error>
      <NoResults v-else-if="!items.length">
        No results
      </NoResults>
      <ItemList v-else :data="items" />
    </v-container>
  </v-content>
</template>

<script>
import {
  mapActions,
  mapState,
} from 'vuex';
import ItemList from '@/components/ItemList';
import Loader from '@/components/Loader';
import NoResults from '@/components/NoResults';
import Error from '@/components/Error';

export default {
  components: {
    Error,
    ItemList,
    Loader,
    NoResults,
  },

  data () {
    return {
      error: null,
      isLoading: false,
    };
  },

  computed: mapState(['items']),

  async mounted () {
    this.isLoading = true;

    try {
      await this.loadItems(this.$route.params.slug);
    } catch (error) {
      this.error = error;
    } finally {
      // loading delay to show loader
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  },

  methods: {
    ...mapActions(['loadItems']),
  },
};
</script>
