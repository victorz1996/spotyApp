<template>
  <div>
    <b-card
      :title="item.name"
      :img-src="item.images[0].url"
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
  methods: {
    verRelease(release) {
      this.$router.push(`artistas/${release.artists[0].id}`)
    },
  },
}
</script>
