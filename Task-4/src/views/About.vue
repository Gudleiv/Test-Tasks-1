<template>
  <div class="about">
    <v-container fluid grid-list-xl>
      <v-layout wrap align-center>
        <v-flex xs12 sm6>
          <v-select
            v-model="driverCatValue"
            :items="items"
            label="Водительские категории"
            multiple
          ></v-select>
          <span>driverCat: {{driverCat}}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      }
  },
  computed: {
        ...mapState('driver', {
          driverCat: state => state.driverCat,
        }),
        items() {
          return this.$store.state.logic.driverCatList
        },
        driverCatValue: {
          get() {
            return this.$store.getters.getFormattedDriverCategory     
          },
          set(value) {
            const sorted = [...value].sort()
            this.$store.dispatch('changeDriverCategory', sorted)
          }
        }
      }
}
</script>
