<template>
  <v-content :style="{backgroundImage: `url(${require('~/static/header_bg.jpg')})`, backgroundSize: 'cover'}">
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
          <v-card class="elevation-12">
            <v-toolbar
              color="orange"
              dark
              flat
            >
              <v-toolbar-title>Find beer for Your meal!</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="handleSearchEvent">
              <v-card-text>
                <v-text-field
                  v-model="search"
                  label="Search | eg. chicken, pasta..."
                  name="search"
                  type="text"
                  color="orange"
                  required
                  autofocus
                  :rules="searchRules"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="orange" type="submit">
                  Search
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      valid: true,
      searchRules: [v => !!v || 'Search is required'],
    };
  },

  methods: {
    handleSearchEvent () {
      if (this.$refs.form.validate()) {
        this.$router.push(`/list/${this.search}`);
      }
    },
  },
};
</script>
