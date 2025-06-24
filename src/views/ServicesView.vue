<template>
  <v-container class="pa-5">
    <div v-if="loading" class="d-flex justify-center align-center" style="height: 400px">
      <v-row align="center" justify="center">
        <v-progress-circular indeterminate color="primary" class="mr-3" />
        <span>Cargando...</span>
      </v-row>
    </div>
    <v-row class="mb-6 text-center">
      <v-col cols="12">
        <h1 class="title fade-in-down">Servicios</h1>
      </v-col>
    </v-row>

    <!-- Sección: Consultoría -->
    <v-row class="mb-6" align="center">
      <v-col md="6" class="d-flex justify-center">
        <v-img
          src="/images/consultoria.png"
          alt="Consultoría"
          height="300"
          class="rounded-lg elevation-3 fade-in-img"
          cover
        />
      </v-col>
      <v-col md="6">
        <v-card outlined class="elevation-1 fade-in-up">
          <v-card-title class="service-title">Consultoría</v-card-title>
          <v-card-text class="service-text">
            <ul>
              <li>
                Constitución y/o disolución y liquidación de sociedades; elaboración de contratos de
                colaboración empresarial.
              </li>
              <li>Fusión, transformación y escisión de empresas.</li>
              <li>
                Asesoría permanente en materia societaria y laboral (atención de inspecciones
                laborales).
              </li>
              <li>Revisión y evaluación de libros y registros sociales.</li>
              <li>
                Atención personalizada antes, durante y después de los Procesos de Fiscalización.
              </li>
              <li>
                Planeamiento tributario y desarrollo de estrategias legales, societarias y
                mercantiles.
              </li>
              <li>
                Asistencia, formulación y seguimiento de expedientes de devolución de percepciones,
                detracciones, retenciones no aplicadas, saldo a favor del exportador, recuperación
                anticipada del IGV y drawback.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sección: Asesoría -->
    <v-row class="mb-6" align="center" justify="space-between">
      <v-col md="6" order-md="2" class="d-flex justify-center">
        <v-img
          src="/images/asesoria.png"
          alt="Asesoría"
          height="300"
          class="rounded-lg elevation-3 fade-in-img"
          cover
        />
      </v-col>
      <v-col md="6" order-md="1">
        <v-card outlined class="elevation-1 fade-in-up">
          <v-card-title class="service-title">Asesoría</v-card-title>
          <v-card-text class="service-text">
            <ul>
              <li>
                Planificación de operaciones y solución de controversias tributarias derivadas de
                procesos de fiscalización.
              </li>
              <li>
                Asesoría en aspectos legales que afectan los negocios: societarios, contractuales,
                mercantiles, laborales, entre otros.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Sección: Legal -->
    <v-row class="mb-6" align="center">
      <v-col md="6" class="d-flex justify-center">
        <v-img
          src="/images/legal.png"
          alt="Legal"
          height="300"
          class="rounded-lg elevation-3 fade-in-img"
          cover
        />
      </v-col>
      <v-col md="6">
        <v-card outlined class="elevation-1 fade-in-up">
          <v-card-title class="service-title">Legal</v-card-title>
          <v-card-text class="service-text">
            <ul>
              <li>
                Constitución y/o disolución y liquidación de sociedades; formación de alianzas
                estratégicas, contratos de colaboración empresarial.
              </li>
              <li>Fusión, transformación y escisión de empresas.</li>
              <li>Asesoría permanente en materia societaria y laboral (inspecciones laborales).</li>
              <li>
                Planeamiento tributario y desarrollo de estrategias legales, societarias y
                mercantiles.
              </li>
              <li>
                Asistencia y seguimiento de expedientes de devolución de percepciones, detracciones,
                retenciones, saldo a favor del exportador, recuperación anticipada del IGV y
                drawback.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 250)
  },
}
</script>

<style scoped>
.title {
  font-size: 36px;
  font-weight: bold;
  color: #1976d2;
}

.subtitle {
  font-size: 18px;
  color: #555;
  margin-top: -10px;
}

.service-title {
  background-color: #19a1d2;
  color: white;
  font-weight: bold;
  padding: 10px;
  font-size: 18px;
}

.service-text {
  padding: 16px;
  font-size: 15px;
  color: #333;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

.fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

.fade-in-img {
  animation: fadeInUp 0.8s ease-out;
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
