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
            https://medium.com/@gabriel.barreto.dev/internacionaliza%C3%A7%C3%A3o-para-vue-3-com-vuei18n-b765a04b8741
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
      <ArticleCard>
        <template v-slot:title-article>
          <a
            href="
            https://medium.com/@gabriel.barreto.dev/language-switcher-carregamento-din%C3%A2mico-de-l%C3%ADnguas-com-vue-3-e-vuei18n-e214ca5895b9
            "
            class="links-purple"
            target="_blank"
            >(PT-BR) Language Switcher para Vue3 com VueI18N</a
          >
        </template>
        <template v-slot:card-text>
          Tutorial de implementação de carregamento dinâmico de
          línguas em seu app com Vue 3 e VueI18N.
        </template>
        <template v-slot:image>
          <img
            class="article-image"
            src="/language_switcher_thumbnail.png"
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
