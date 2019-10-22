<template>
  <v-list dense>
    <v-list-group
      color="orange"
      prepend-icon="restaurant"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="'Food Pairing'" />
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="item in food"
        :key="item"
      >
        <v-icon v-text="'mdi-square-small'" />
        <v-list-item-text v-text="item" />
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: {
    food: {
      type: Array,
      required: true
    }
  }
}
</script>
