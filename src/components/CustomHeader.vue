<template>
    <header class="flex justify-around w-full h-18 p-3 bg-brand-main">
        <div class="flex w-full lg:w-3/4">
            <img @click="goToHome" class="self-center rounded-full w-12 h-12 mx-5 cursor-pointer"
                src="/src/assets/esl_bags_logo.jpg" alt="Logo">
            <div class="flex items-center w-4/5">
                <input class="rounded-l h-10 focus:outline-none px-3 w-11/12 bg-white" type="text"
                    placeholder="Pesquisar">
                <button class="bg-brand-gray flex justify-center rounded-r items-center h-10 w-10">
                    <img fill="brand-graydark" src="/src/assets/icons/search.svg" alt="Pesquisar">
                </button>
            </div>
        </div>
        <div class="flex hidden lg:flex">
            <button class="text-white mr-12" @click="goToAccountCreate">Criar uma conta</button>
            <button class="bg-white text-lg text-brand-main px-12 rounded-full" @click="goToLogin">
                Entrar
            </button>
        </div>
    </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup(_, { emit }) {
        const router = useRouter()

        function goToHome() {
            router.push({ name: 'Home' })
        }

        function goToLogin() {
            router.push({ name: 'Login' })
        }

        function goToAccountCreate() {
            router.push({ name: 'Singup' })
        }

        return { emit, goToHome, goToLogin, goToAccountCreate }
    }
}
</script>