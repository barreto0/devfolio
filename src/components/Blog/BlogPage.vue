<template>
  <div class="background px-5">
    <Navbar></Navbar>
    <p class="job-title text-center mt-5">
      Blog<span class="end-point">.</span>
    </p>
    <div class="row h-100 justify-content-center">
      <ArticleCard>
        <template v-slot:title-article>
          <a
            href="
            https://www.youtube.com/watch?v=2wUPK_a8PPU
            "
            class="links-purple"
            target="_blank"
            >(PT-BR) Internacionalização para Vue3 com VueI18N</a
          >
        </template>
        <template v-slot:card-text>
          Tutorial demostrativo de como é possivel internacionalizar o
          seu aplicativo em Vue 3 com facilidade e sem depender de
          nenhuma geração de código.
        </template>
        <template v-slot:image>
          <img
            class="article-image"
            src="/thumb_localizaçao_pt.png"
            alt="Internacionalização para Vue3 com VueI18N"
          />
        </template>
      </ArticleCard>
    </div>
    <Footer></Footer>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
