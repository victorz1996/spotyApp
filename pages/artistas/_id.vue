<template>
  <div>
    <loading v-if="loading" />
    <div v-else>
      <b-row>
        <b-col sm="2">
          <img
            class="img-thumbnail img-circle"
            :src="artista | image"
            :alt="artista.name"
          />
        </b-col>
        <b-col sm="6">
          <h4 class="text-left">{{ artista.name }}</h4>
          <p>
            <a :href="artista.external_urls.spotify"
              >Ir a la pagina del artista</a
            >
          </p>
        </b-col>
        <b-col sm="4">
          <b-button variant="danger" class="float-right" @click="volver"
            >Regresar</b-button
          >
        </b-col>
      </b-row>
      <div class="mt-4">
        <b-table table-variant="dark" :fields="fields" :items="topTracks">
          <template #cell(photo)="row">
            <img class="img-thumb" :src="row.item.photo" />
          </template>
          <template #cell(view)="row">
            <iframe
              :src="'https://open.spotify.com/embed/track/' + row.item.id"
              width="300"
              height="80"
              frameborder="0"
              allowtransparency="true"
            ></iframe>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import loading from '../../components/Loading'
export default {
  components: {
    loading,
  },
  filters: {
    image(value) {
      if (value && value.images.length) {
        return value.images[0].url
      } else {
        return this.noImage
      }
    },
  },
  data() {
    return {
      noImage: '/no-image.png',
      artista: {},
      loading: true,
      topTracks: [],
      fields: [
        {
          key: 'photo',
          label: 'Foto',
          image: true,
        },
        {
          key: 'album',
          label: 'Album',
        },
        {
          key: 'cancion',
          label: 'Cancion',
        },
        {
          key: 'view',
          label: 'Vista previa',
          class: 'w-30',
        },
      ],
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
      const res = await axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}`,
        this.$store.state.configHeader
      )
      this.artista = res.data
      this.obtenerTopTracks()
      this.loading = false
    },
    async obtenerTopTracks() {
      const res = await axios.get(
        `https://api.spotify.com/v1/artists/${this.$route.params.id}/top-tracks?market=CO`,
        this.$store.state.configHeader
      )
      this.topTracks = this.parsearData(res.data.tracks)
    },
    parsearData(tracks) {
      const tracksParced = []
      tracks.forEach((elem) => {
        const item = {
          id: elem.id,
          photo: elem.album.images.length
            ? elem.album.images[0].url
            : this.noImage,
          album: elem.album.name,
          cancion: elem.name,
          view: elem.preview_url,
        }
        tracksParced.push(item)
      })
      return tracksParced
    },
  },
}
</script>
