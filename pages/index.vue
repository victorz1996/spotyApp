<template>
  <div>
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
</template>

<script>
import axios from 'axios'
import card from '../components/Card'
export default {
  components: {
    card,
  },
  data() {
    return {
      releases: [],
    }
  },
  mounted() {
    this.obtenerReleases()
  },
  methods: {
    async obtenerReleases() {
      const config = {
        headers: {
          authorization: this.$store.state.token,
        },
      }
      const res = await axios.get(
        'https://api.spotify.com/v1/browse/new-releases?country=US&limit=20',
        config
      )
      this.releases = res.data.albums.items
    },
  },
}
</script>
