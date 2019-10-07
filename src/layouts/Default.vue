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


        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://firebasestorage.googleapis.com/v0/b/deyvidjlira-personal.appspot.com/o/images%2Fphoto_profile.png?alt=media&token=7a72a389-b9e2-4b95-89cd-73adb536e451"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text">Deyvid Jaguaribe</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-btn text small color="error" @click="logout">SAIR</v-btn>            
          </v-list-item>

        </v-list>

        <v-divider class="white"></v-divider>

        <v-list dark shaped>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to">
              <v-list-item-icon>
                <v-icon>mdi-{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>

    <v-content>
      <slot />
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'default',
  components: {
    Footer
  },
  data() {
    return {
      drawer: false,
      items: [
          { title: 'Início', icon: 'newspaper', to: { name: 'dashboard' } },
          { title: 'Registros ', icon: 'clipboard-list', to: { name: 'registers' } },
          { title: 'Configurações', icon: 'settings', to: { name: 'settings' } },
        ],
    }
  },
  methods: {
    logout() {
      this.$router.push({path: '/login'})
    }
  }
};
</script>
