<template>
    <div class="auth">
        <div class="auth-modal">
            <div class="auth-title">
                <h2> Login </h2>
            </div>

            <label for="input-cpf">CPF:</label>
            <b-input v-model="user.cpf" id="input-cpf" placeholder="Informe seu CPF"></b-input>

            <br>

            <label for="input-senha">Senha:</label>
            <b-input v-model="user.senha" id="input-senha" placeholder="Insira sua senha" type="password"></b-input>

            <br>

            <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="true"
                unchecked-value="false"
            >
                Lembrar login
            </b-form-checkbox>

            <b-button pill block variant="danger" @click="login()" class="btn-login">Entrar</b-button>
            <router-link to="/" id="registro"> Registre-se! </router-link>
        </div>
    </div>
</template>

<script>
import { baseApiUrl , showError, userKey} from '@/global.js'
import axios from 'axios'

export default {
    name: 'Autenticacao',
    data: function() {
        return {
            status: "false",
            user: {}
        }
    },
    methods: {

        login() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        width: 350px;
        padding: 30px; 
        box-shadow: 1px 5px 30px rgb(195, 195, 195);
    }

    .auth-title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-login {
        margin-top: 20px;
    }

    #registro {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 8px;

        text-decoration: none;
        color: black;
    }
</style>