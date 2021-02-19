<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="goTo('home')">Home</b-nav-item>
          <b-nav-item @click="goTo('search')">Buscar</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    goTo(aDonde) {
      if (aDonde === 'home') {
        this.$router.push('/')
      }
      if (aDonde === 'search') {
        this.$router.push('/search')
      }
    },
  },
}
</script>
