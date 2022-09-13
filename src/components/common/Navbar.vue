<template>
  <nav
    class="navbar navbar-expand-lg"
    style="background-color: #1f1f1f"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <font-awesome-icon
          icon="fa-solid fa-bars"
          style="color: white"
        />
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a
              class="nav-link active fw-bold text-light"
              aria-current="page"
              @click="$router.push('/')"
              >{{ $t('navbar.about') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active fw-bold text-light"
              aria-current="page"
              @click="$router.push('/contact')"
              >{{ $t('navbar.contact') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active fw-bold text-light"
              aria-current="page"
              @click="$router.push('/portfolio')"
              >{{ $t('navbar.portfolio') }}</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active fw-bold text-light"
              aria-current="page"
              >Blog</a
            >
          </li>
        </ul>
        <div>
          <span
            class="text-light p-0 m-0 locale"
            @click="setLocale('pt_BR')"
            >PT-BR</span
          >
          <span class="text-light p-0 m-0"> | </span>
          <span
            class="text-light p-0 m-0 locale"
            @click="setLocale('en')"
            >EN</span
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.locale {
  cursor: pointer;
}
.nav-link {
  cursor: pointer;
}
</style>
<script>
export default {
  name: 'Navbar',
  data() {
    return {};
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
