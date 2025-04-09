<template>
  <v-container fluid class="contact-section py-10">
    <v-row class="d-flex justify-center mb-8">
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <v-img
          src="/images/pensando.png"
          alt="Portada estudioCEA"
          max-width="300"
          class="rounded-lg elevation-4"
          cover
        />
      </div>
    </v-row>

    <v-row class="text-center my-6">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold mb-2" data-aos="fade-right" data-aos-delay="300">
          Contáctanos
        </h1>
        <h2 class="text-h5 font-weight-medium" data-aos="fade-left" data-aos-delay="500">
          Estudio Contable Chupillón Espinoza & Asociados
        </h2>
      </v-col>
    </v-row>

    <v-row class="pa-6" data-aos="fade-up" data-aos-delay="700">
      <v-col cols="12" md="6" class="mb-4 mb-md-0">
        <iframe
          src="https://www.google.com/maps?q=Av.+Leoncio+Prado+1680,+Chiclayo,+Perú&output=embed"
          width="100%"
          height="350"
          style="border: 0; border-radius: 16px"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center text-md-left text-center">
        <h3 class="text-h6 font-weight-bold mb-2">Dirección:</h3>
        <p class="text-subtitle-1">
          Av. Leoncio Prado Nº 1680<br />
          Urb. Campodónico - Chiclayo<br />
          Lambayeque - Perú
        </p>
        <h3 class="text-h6 font-weight-bold mt-4 mb-2">Teléfono:</h3>
        <p class="text-subtitle-1">+51 982630874</p>
        <h3 class="text-h6 font-weight-bold mt-4 mb-2">Correo:</h3>
        <p class="text-subtitle-1">
          <a
            href="mailto:estudioceasoc@gmail.com?subject=Consulta&body=Hola, quiero saber más sobre los servicios."
            class="black-text"
            >estudioceasoc@gmail.com</a
          >
        </p>
      </v-col>
    </v-row>

    <v-row class="pa-6" data-aos="fade-up" data-aos-delay="900">
      <v-col cols="12" md="6">
        <h3 class="text-h6 font-weight-bold mb-4">Comentarios:</h3>
        <v-scroll-y-transition group>
          <v-row>
            <v-col v-for="(comment, index) in comments" :key="index" cols="12" class="mb-3">
              <v-card elevation="2" class="pa-3" style="border-left: 4px solid #1976d2">
                <div class="d-flex justify-space-between align-center">
                  <strong>{{ comment.name }}</strong>
                  <small class="grey--text">{{ comment.date }}</small>
                </div>
                <p class="mt-2 mb-0">{{ comment.text }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-scroll-y-transition>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <v-form v-model="valid" lazy-validation>
          <v-textarea
            v-model="newComment.text"
            label="Escribe tu comentario"
            outlined
            rows="4"
            :rules="[rules.required]"
            required
          ></v-textarea>

          <v-text-field
            v-model="newComment.name"
            label="Tu nombre"
            outlined
            :rules="[rules.required]"
            required
          ></v-text-field>

          <v-btn color="primary" class="mt-2" @click="submitComment" :disabled="!valid">
            Enviar comentario
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" color="success" top right timeout="3000">
      ¡Gracias por tu comentario!
    </v-snackbar>
  </v-container>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'ContactView',
  data() {
    return {
      newComment: {
        name: '',
        text: '',
        date: '',
      },
      comments: [
        { name: 'Eduardo Gines', text: 'Excelente servicio.', date: '2025-04-08' },
        {
          name: 'Geampier Severino',
          text: 'Recomiendo totalmente que mejoren la atencion rapida y efectiva.',
          date: '2025-04-07',
        },
        {
          name: 'Luigi Pisfil',
          text: 'Muy contento con los resultados gracias por todo.',
          date: '2025-04-06',
        },
        {
          name: 'Kenedy Fernandez',
          text: 'Atencion Rapida.',
          date: '2025-04-06',
        },
      ],
      valid: false,
      snackbar: false,
      rules: {
        required: (value) => !!value || 'Este campo es obligatorio.',
      },
    }
  },
  methods: {
    submitComment() {
      if (this.newComment.name && this.newComment.text) {
        const date = new Date().toLocaleDateString()
        this.comments.unshift({
          name: this.newComment.name,
          text: this.newComment.text,
          date,
        })
        this.newComment.name = ''
        this.newComment.text = ''
        this.valid = false
        this.snackbar = true
      }
    },
  },
  mounted() {
    AOS.init({
      duration: 900,
      once: true,
    })
  },
}
</script>

<style scoped>
.black-text {
  color: black !important;
}

a:hover,
a:visited {
  color: black !important;
}
</style>
