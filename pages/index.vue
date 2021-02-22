<template>
  <div>
    <div v-if="loading">
      <loading />
    </div>
    <div>
      <error v-if="error" :mensaje="errorMensaje" />
    </div>
    <div v-if="!loading && !error">
      <h4>Top 20 Realeases</h4>
      <div class="row">
        <card
          v-for="release in releases"
          :key="release.id"
          class="mt-5 col-4"
          :item="release"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import card from '../components/Card'
import error from '../components/Error'
import loading from '../components/Loading'
export default {
  components: {
    card,
    error,
    loading,
  },
  data() {
    return {
      releases: [],
      error: false,
      loading: false,
      errorMensaje: '',
    }
  },
  mounted() {
    this.obtenerReleases()
  },
  methods: {
    async obtenerReleases() {
      this.loading = true
      const res = await axios
        .get(
          'https://api.spotify.com/v1/browse/new-releases?country=US&limit=20',
          this.$store.state.configHeader
        )
        .catch((e) => {
          this.loading = false
          this.error = true
          this.errorMensaje = e.response.data.error.message
        })
      this.releases = res.data.albums.items
      this.loading = false
    },
  },
}
</script>
