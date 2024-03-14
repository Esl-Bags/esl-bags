<template>
  <carousel :items-to-show="1" :wrapAround="true" :autoplay="10000">
    <slide v-for="(image, index) in images" :key="index">
      <img :src="'/src/assets/images/' + image.src" alt="...">
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
      { 'src': '1.jpeg' },
      { 'src': '2.jpeg' },
      { 'src': '3.jpeg' },
    ]

    return { images }
  }
}
</script>