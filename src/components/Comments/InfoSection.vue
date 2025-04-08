<template>
  <v-card class="pa-4" elevation="2">
    <v-card-title class="text-h5 mb-2">{{ title }}</v-card-title>
    <v-card-text class="fade-in-up">{{ content }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'InfoSection',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-card {
  background-color: #f9f9f9;
}

.v-card-title {
  color: #0a3571; /* Color del título de la tarjeta */
}

.v-card-text {
  color: #333; /* Color del texto de la tarjeta */
  line-height: 1.6;
}
</style>
