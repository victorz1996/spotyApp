<template>
  <div>
    <b-card
      :title="item.name"
      :img-src="item.images.length ? item.images[0].url : noImage"
      :img-alt="item.name"
      img-top
      style="max-width: 20rem"
      class="mb-2 puntero"
      @click="verRelease(item)"
    >
      <b-card-text>
        <b-badge
          v-for="artist in item.artists"
          :key="artist.id"
          variant="primary"
          >{{ artist.name }}</b-badge
        >
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: { type: Object },
  },
  data() {
    return {
      noImage: 'no-image.png',
    }
  },
  methods: {
    verRelease(release) {
      if (release.type === 'album') {
        this.$router.push(`artistas/${release.artists[0].id}`)
      } else {
        this.$router.push(`artistas/${release.id}`)
      }
    },
  },
}
</script>
