<template>
  <loading v-if="loading" />
  <b-row v-else>
    <b-col sm="2">
      <img class="img-thumb img-circle" :src="artista.images[0].url" alt="" />
    </b-col>
    <b-col sm="6">
      <h4 class="text-left">{{ artista.name }}</h4>
      <p>
        <a :href="artista.external_urls.spotify">Ir a la pagina del artista</a>
      </p>
    </b-col>
    <b-col sm="4">
      <b-button variant="danger" class="float-right" @click="volver"
        >Regresar</b-button
      >
    </b-col>
  </b-row>
</template>
<script>
import axios from 'axios'
import loading from '../../components/Loading'
export default {
  components: {
    loading,
  },
  data() {
    return {
      artista: {},
      loading: true,
    }
  },
  mounted() {
    this.obtenerArtista()
  },
  methods: {
    volver() {
      this.$router.go(-1)
    },
    async obtenerArtista() {
      this.loading = true
      const config = {
        headers: {
          authorization: this.$store.state.token,
        },
      }
      const res = await axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}`,
        config
      )
      this.artista = res.data
      console.log(this.artista)
      this.loading = false
    },
  },
}
</script>
