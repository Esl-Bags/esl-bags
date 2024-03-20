<template>
    <div class="flex flex-col w-full h-full items-center">
        <custom-header />
        <div class="flex flex-row text-4xl mt-16">
            <img class="w-10" src="/src/assets/icons/settings.svg" alt="icone engrenagem">
            <span>Em construção</span>
        </div>
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