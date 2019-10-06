<template>
  <v-app>
    <nav>
      <v-app-bar flat app elevation=4>
        <v-app-bar-nav-icon  class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>      
        <v-toolbar-title class="headline ">
          <span>Demonstração </span>
          <span class="font-weight-light">Painel Administrativo</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn 
          text
          href="https://deyvidjlira.com">
          <span class="mr-2">Contate-me</span>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer app v-model="drawer" class="blue-grey darken-4">
      </v-navigation-drawer>
    </nav>

    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      drawer: false
    }
  }
};
</script>
