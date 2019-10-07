<template>
  <v-layout
      text-center
      wrap>

      <v-card
        class="mx-auto my-12 pa-4"
        color="white">
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"></v-img>
        </v-flex>
    
        <v-col cols="12">
          <h1 class="display-2 font-weight-bold mb-3">
            Seja bem-vindo!
          </h1>
          <p class="subheading font-weight-regular">
            Faça login para acessar e ver o contéudo dessa <b>demonstração</b>
          </p>
          <br>
        </v-col>

        <v-row no-gutters>
          
            <v-col md="12">
              <v-form
                ref="form">
                <v-text-field
                  v-model="username"
                  :counter="20"
                  :rules="usernameRules"
                  label="Nome de usuário"
                  required>
                </v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-visibility' : 'mdi-visibility_off'"
                  :type="showPassword ? 'text' : 'password'"
                  :counter="20"
                  :rules="passwordRules"
                  label="Senha"
                  required
                  @click:append="showPassword = !showPassword"
                  >
                </v-text-field>

                <v-btn
                  color="success"
                  class="mr-4"
                  @click="validate">
                  ENTRAR
                </v-btn>
              </v-form>
            </v-col>

        </v-row>        

      </v-card>

      <v-col cols="12">
        <h1 class="subtitle-1 font-weight-bold mb-3">
          Created and Designed by <a href="https://deyvidjlira.com">Deyvid Jaguaribe</a> with Vuetify
        </h1>
      </v-col>

      <v-snackbar
        v-model="showSnackbar"
        :color="error"
        :timeout="6000"
        :top="true">
        Usuário e/ou senha não conferem!
        <v-btn
          dark
          text
          @click="showSnackbar = false">
          Fechar
        </v-btn>
      </v-snackbar>

  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        showPassword: false,
        showSnackbar: false,
        username: "",
        usernameRules: [
          v => !!v || 'Nome de usuário é obrigatório',
          v => (v && v.length > 4 && v.length <= 20) || 'Nome de usuário deve ter no mínimo 4 e no máximo 20 caracteres',
        ],
        password: "",
        passwordRules: [
          v => !!v || 'Senha é obrigatório',
          v => (v && v.length > 4 && v.length <= 20 ) || 'Senha deve ter no mínimo 4 e no máximo 20 caracteres',
        ],
      }
    },
    methods: {
      validate() {
        if(this.$refs.form.validate()) {
          if(this.username == "Admin" && this.password == "123456") {
            this.$router.push({path: '/dashboard'})
          } else {
            this.showSnackbar = true;
          }
        }
      }
    }
  }
</script>