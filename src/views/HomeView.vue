<template>
  <v-container class="d-flex justify-center pa-4">
    <transition name="slide-fade">
      <v-img
        v-if="!loading"
        src="/PortadaC.jpg"
        alt="Portada estudioCEA"
        max-width="1200"
        class="rounded-lg elevation-3"
        cover
      />
    </transition>

    <div v-if="loading" class="d-flex justify-center align-center" style="height: 400px">
      <v-row align="center" justify="center">
        <span>Cargando contenido...</span>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    })
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition:
    transform 1s ease-out,
    opacity 1s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
