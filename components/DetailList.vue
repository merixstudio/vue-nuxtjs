<template>
  <v-list dense>
    <v-list-group
      :prepend-icon="icon"
      color="orange"
    >
      <template v-slot:activator>
        <v-list-item-title>
          <slot />
        </v-list-item-title>
      </template>

      <template v-if="Array.isArray(data)">
        <v-list-item
          v-for="item in data"
          :key="item"
        >
          <v-icon v-text="'mdi-square-small'" />
          <v-list-item-text v-text="item" />
        </v-list-item>
      </template>

      <v-list-group
        v-for="(item, i) in data"
        v-else
        :key="i"
        no-action
        sub-group
        color="orange"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ i }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <template v-if="Array.isArray(item)">
          <v-list-item v-for="subitem in item" :key="subitem">
            <v-icon v-text="'mdi-square-small'" />
            <v-list-item-text v-text="subitem.name" />
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item>{{ item }}</v-list-item>
        </template>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
