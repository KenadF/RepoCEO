<template>
  <v-app>
    <div v-if="loading" class="splash-screen">
      <div class="splash-content">
        <v-img src="/logo.jpg" alt="Logo Chupillon" max-width="200" class="logo mb-4"></v-img>
        <h2 class="title">Estudio Contable Chupillon Espinoza Asociados</h2>
      </div>
    </div>

    <div v-else>
      <v-app-bar :color="'#0a3571'" dark app>
        <v-img src="/logo.jpg" alt="logo chupillon" max-width="400" class="rounded" />
        <v-spacer />
        <v-btn text to="/">Inicio</v-btn>
        <v-btn text to="/about">Sobre Nosotros</v-btn>
        <v-btn text to="/services">Servicios</v-btn>
        <v-btn text to="/contact">Contacto</v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid class="main-content">
          <RouterView />
        </v-container>
      </v-main>
      <WhatsappButton />
      <v-footer :color="'#0b3672'" dark app>
        <v-container class="text-center"> Chupillon. </v-container>
      </v-footer>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import WhatsappButton from '@/components/WhatsappButton.vue'
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    ;(loading.value = false), WhatsappButton
  }, 1500)
})
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #4a90e2, #50e3c2);
  animation: gradientBackground 5s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

@keyframes gradientBackground {
  0% {
    background: linear-gradient(45deg, #4a90e2, #50e3c2);
  }
  100% {
    background: linear-gradient(45deg, #4a90e2, #50e3c2);
  }
}

.splash-content {
  text-align: center;
  color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  animation: fadeInUp 1.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.logo {
  border-radius: 50%;
  animation: scaleUp 1.2s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  animation: fadeInText 1s ease-out;
}

@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
