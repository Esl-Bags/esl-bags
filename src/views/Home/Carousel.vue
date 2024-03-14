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

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  setup() {
    const images = [
      { 'src': '/src/assets/images/1.webp' },
      { 'src': '/src/assets/images/2.webp' },
      { 'src': '/src/assets/images/3.webp' },
    ]

    return { images }
  }
}
</script>