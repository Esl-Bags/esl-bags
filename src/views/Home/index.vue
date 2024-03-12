<template>
    <custom-header
        @create-account="goToAccountCreate"
        @login="goToLogin"
    />
    <carousel />
    <offer />
    <category />
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">Esl Bags &copy; 2024</p>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import CustomHeader from '../../components/CustomHeader.vue'
import { useRouter } from 'vue-router'
export default {
    components: { CustomHeader },
    setup () {
        const router = useRouter()

        onMounted(() => {
            const token = window.localStorage.getItem('token')
        })
        function goToLogin() {
            router.push({ name: 'Login' })
        }

        function goToAccountCreate() {
            router.push({ name: 'Singup' })
        }

        return {
            goToLogin,
            goToAccountCreate
        }
    }
}
</script>