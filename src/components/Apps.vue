<template>
  <v-layout>
      <v-flex xs3 v-for="app in apps" :key="app.id" class="ma-2">
          <v-card color="red">
              <v-card-title>
                  {{app.title}}
              </v-card-title>
          </v-card>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
    data() {
        return {
            apps: [
                {
                    id: 1,
                    title: 'fuml'
                },
                {
                    id: 2,
                    title: 'troubadour'
                }
            ]
        }
    }
}
</script>

<style>

</style>