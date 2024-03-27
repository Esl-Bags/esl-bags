<template>
  <carousel :items-to-show="1" :wrapAround="true" :autoplay="10000">
    <slide v-for="(image, index) in state.images" :key="index">
      <img :src="image.src" :alt="'image ' + index">
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { onMounted, reactive } from 'vue'

import services from '../../services'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  setup() {
    const state = reactive({ images: [] })

    onMounted(async () => {
      try {
        const { data, erros } = await services.carousel.get()
        if (!erros) {
          for (let image of data) {
            state.images.push({ 'src': image.image })
          }
        }
      } catch {

      }
    })

    return { state }
  }
}
</script>