<template>
  <div class="background">
    <Navbar></Navbar>
    <div class="container vh-100">
      <div
        class="h-100 justify-content-center d-flex align-items-center flex-column"
      >
        <p class="text-light name">GABRIEL BARRETO</p>
        <p class="text-light job-title">Engenheiro da Computação</p>
        <p class="text-light job-title">
          Desenvolvedor Frontend e Mobile
        </p>
      </div>
      <div class="container text-center" style="margin-top: -12%">
        <div class="row">
          <div class="col align-self-center">
            <p class="text-light m-0 p-0">
              Deslize para descobrir mais sobre mim e oque eu faço
            </p>
            <font-awesome-icon
              class="animated-chevron-down bounce"
              icon="fa-solid fa-chevron-down"
              style="color: #c044ec; margin-top: 2%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="vh-100">
      <div
        class="h-100 justify-content-center d-flex align-items-center flex-column"
      >
        <p class="text-light name">GABRIEL BARRETO</p>
        <p class="text-light job-title">Engenheiro da Computação</p>
        <p class="text-light">Desenvolvedor Frontend e Mobile</p>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped>
.name {
  font-size: 10vh;
}
.job-title {
  font-size: 5vh;
  padding: 0;
  margin: 0;
}
.animated-chevron-down {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-25px);
  }
  60% {
    -webkit-transform: translateY(-10px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}
</style>
