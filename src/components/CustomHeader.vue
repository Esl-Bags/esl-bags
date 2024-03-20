<template>
    <header class="flex justify-around items-center w-full h-18 p-3 bg-brand-main">
        <div class="flex w-10/12 lg:w-3/4">
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
            <button class="bg-white text-lg text-brand-main px-12 rounded-full h-10" @click="goToLogin">
                Entrar
            </button>
        </div>
        <div class="lg:hidden">
            <button @click="state.isOpen = !state.isOpen" type="button"
                class="block text-white hover:text-white focus:text-white focus:outline-none">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path v-if="state.isOpen" fill-rule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    <path v-if="!state.isOpen" fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
            </button>
        </div>
    </header>
    <nav :class="state.isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 bg-brand-main w-full lg:hidden sm:p-3">
        <a class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:ml-3"
            @click="goToHome">
            Início
        </a>
        <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-3"
            @click="goToLogin">
            Entrar
        </a>
        <a class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-3"
            @click="goToAccountCreate">
            Criar uma conta
        </a>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

export default {
    setup(_, { emit }) {
        const router = useRouter()
        const state = reactive({ isOpen: false })

        function goToHome() {
            router.push({ name: 'Home' })
        }

        function goToLogin() {
            router.push({ name: 'Login' })
        }

        function goToAccountCreate() {
            router.push({ name: 'Singup' })
        }

        return { emit, goToHome, goToLogin, goToAccountCreate, state }
    }
}
</script>