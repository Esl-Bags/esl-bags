<template>
  <carousel :items-to-show="1" :wrapAround="true" :autoplay="10000">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" alt="...">
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { onMounted } from 'vue'

import image1 from '/src/assets/images/1.jpeg'
import image2 from '/src/assets/images/2.jpeg'
import image3 from '/src/assets/images/3.jpeg'
import services from '../../services'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  setup() {

    onMounted(async () => {
      try {
        const { data, erros } = await services.carousel.get()
        if (!erros) {
          console.log(data)
        }
      } catch {

      }
    })
    const images = [
      { 'src': image1 },
      { 'src': image2 },
      { 'src': image3 },
    ]

    return { images }
  }
}
</script>