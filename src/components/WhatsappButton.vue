<template>
  <v-btn fab color="transparent" class="whatsapp-btn" @click="goToWhatsapp">
    <v-img src="/wsp.png" alt="WhatsApp" width="50" height="50" />
  </v-btn>
</template>

<script setup>
const goToWhatsapp = () => {
  window.open('https://wa.me/982630874', '_blank')
}
</script>

<style scoped>
.whatsapp-btn {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #25d366;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.whatsapp-btn img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}
</style>
