<template>
  <div
    class="background d-flex align-items-center justify-content-center vh-100"
  >
    <div class="text-center">
      <h1 class="text-white display-1 fw-bold">404</h1>
      <p class="fs-3 text-white">
        <span class="text-danger">Oops!</span> Página não encontrada.
      </p>
      <p class="lead text-white">
        A página que você procurou não existe.
      </p>
      <button
        type="button"
        class="btn btn-danger"
        @click="$router.push('/')"
      >
        Ir para o início
      </button>
    </div>
  </div>
</template>
