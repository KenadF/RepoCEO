<template>
  <v-container class="pa-5">
    <div v-if="loading" class="d-flex justify-center align-center" style="height: 400px">
      <v-row align="center" justify="center">
        <v-progress-circular indeterminate color="primary" class="mr-3" />
        <span>Cargando...</span>
      </v-row>
    </div>

    <div v-else>
      <v-row class="mb-4">
        <v-col class="text-center" cols="12">
          <h1 class="title fade-in-down">Sobre Nosotros</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="6" class="d-flex justify-center">
          <v-card class="elevation-2" outlined>
            <v-img
              :src="sections[0].image"
              height="200px"
              alt="Imagen de Historia"
              class="grey lighten-3 fade-in-img"
            ></v-img>
            <v-card-title>{{ sections[0].title }}</v-card-title>
            <v-card-text class="fade-in-up">{{ sections[0].content }}</v-card-text>
          </v-card>
        </v-col>

        <v-col md="6">
          <v-row class="mb-4">
            <v-col class="d-flex justify-center">
              <v-card class="elevation-2" outlined>
                <v-card-title>{{ sections[1].title }}</v-card-title>
                <v-card-text class="fade-in-up">{{ sections[1].content }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="d-flex justify-center">
              <v-card class="elevation-2" outlined>
                <v-card-title>{{ sections[2].title }}</v-card-title>
                <v-card-text class="fade-in-up">{{ sections[2].content }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      loading: true,
      sections: [
        {
          title: 'Historia',
          content: `Nuestra empresa está conformada por un grupo de selectos profesionales en diversas disciplinas contables, administrativas, económicas, entre otras, que nace con el objeto de brindar servicios de calidad, principalmente en las distintas áreas de la contabilidad, participación en toma de inventarios físicos y servicios afines, outsourcing contable y de recursos humanos, servicios especializados de asesoría y consultoría contable, tributaria y laboral. Atendemos procesos de fiscalización, formulación y seguimiento de procesos constitucionales, drawback, entre otros. Asimismo, formulamos estudios técnicos de precios de transferencia.`,
          image: '/images/pensando.png',
        },
        {
          title: 'Misión',
          content: `Brindar a nuestros clientes el mejor servicio profesional en las áreas de nuestra especialidad, para que encuentren en nosotros, una total satisfacción a los problemas que se les presentan en su actividad diaria.`,
        },
        {
          title: 'Visión',
          content: `Nuestra visión es ser líderes en el mercado local y ser una empresa contable reconocida a nivel nacional e internacional, ampliando año a año nuestro radio de acción en diversas zonas del país y del extranjero.`,
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 300)
  },
}
</script>

<style scoped>
.title {
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(236, 231, 231, 0.2);
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}

.v-card-title {
  background-color: #19a1d2;
  color: white;
  font-weight: bold;
}

.v-card-text {
  padding: 16px;
  font-size: 14px;
}

.v-img {
  border-bottom: 1px solid #ccc;
}

.v-col {
  margin-bottom: 20px;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

.fade-in-img {
  animation: fadeInUp 1s ease-out;
}

.fade-in-down {
  animation: fadeInDown 1s ease-out;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
