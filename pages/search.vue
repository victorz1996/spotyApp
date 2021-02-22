<template>
  <div>
    <h4>Buscar Artista</h4>
    <b-form-input
      v-model="text"
      class="mt-4"
      type="text"
      placeholder="Buscar..."
      @keyup="buscar(text)"
    ></b-form-input>
    <div v-if="loading" class="mt-4">
      <loading />
    </div>
    <b-row v-if="!loading">
      <card
        v-for="artista in artistas"
        :key="artista.id"
        class="mt-5 col-4"
        :item="artista"
      />
    </b-row>
  </div>
</template>
<script>
import axios from 'axios'
import loading from '../components/Loading'
import card from '../components/Card'
export default {
  components: {
    loading,
    card,
  },
  data() {
    return {
      text: '',
      artistas: [],
      loading: false,
    }
  },
  methods: {
    async buscar(text) {
      if (text.length) {
        this.loading = true
        const res = await axios.get(
          `https://api.spotify.com/v1/search?q=${text}&type=artist`,
          this.$store.state.configHeader
        )
        this.artistas = res.data.artists.items
        this.loading = false
      } else {
        this.artistas = []
      }
    },
  },
}
</script>
