<template>
    <div class="flex flex-col w-full h-full items-center">
        <custom-header />
        <div class="flex flex-row text-4xl mt-16">
            <img class="w-10" src="/src/assets/icons/settings.svg" alt="icone engrenagem">
            <span>Em construção</span>
        </div>

        <!-- Responsive exemple -->
        <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
            <div class="flex items-center justify-between px-4 py-3 sm:p-0">
                <div class="sm:hidden">
                    <button @click="state.isOpen = !state.isOpen" type="button"
                        class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path v-if="state.isOpen" fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            <path v-if="!state.isOpen" fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <nav :class="state.isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">List your
                    property</a>
                <a href="#"
                    class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Trips</a>
                <a href="#"
                    class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Messages</a>
            </nav>
        </header>
    </div>
</template>

<script>
import CustomHeader from '../components/CustomHeader.vue'
import { reactive } from 'vue'

export default {
    components: { CustomHeader },
    setup() {
        const state = reactive({ isOpen: false })
        return { state }
    }
}
</script>