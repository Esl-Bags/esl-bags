<template>
    <custom-header />
    <carousel />
    <!-- <offer />
    <category /> -->
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">Esl Bags &copy; 2024</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import CustomHeader from '../../components/CustomHeader.vue'
import Carousel from './Carousel.vue'
import { useRouter } from 'vue-router'
export default {
    components: { CustomHeader, Carousel },
    setup() {
        const router = useRouter()

        onMounted(() => {
            const token = window.localStorage.getItem('token')
            console.log(import.meta.env.VITE_API_URL)
        })
    }
}
</script>