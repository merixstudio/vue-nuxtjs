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
          <p class="mb-0">
            <v-icon v-text="'mdi-square-small'" />{{ item }}
          </p>
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
          <v-list-item v-for="(subitem, index) in item" :key="`${index} ${subitem.name}`">
            <p class="mb-0">
              <v-icon v-text="'mdi-square-small'" />{{ subitem.name }}
            </p>
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
      type: [Array, Object],
      required: true,
      default: () => {
        return []
      }
    }
  }
}
</script>
