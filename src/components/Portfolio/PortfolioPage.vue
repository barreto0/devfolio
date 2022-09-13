<template>
  <div class="background vh-100">
    <Navbar></Navbar>
    <p class="job-title text-center mt-5">Projetos</p>
    <div class="row h-100 px-5 mt-5">
      <ProjectCard>
        <template v-slot:title-skill> Meu HIIT </template>
        <template v-slot:card-text>
          Aplicativo para rastrear treinos de alta intensidade
          intervalada. Desenvolvido em flutter utilizando arquitetura
          modular e gerenciador de estado Mobx.
        </template>
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.barreto.meu_hiit"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Dinoday </template>
        <template v-slot:card-text>
          Serviço de gerenciamento de "dinodays", em termos simples,
          eventos de aferição de potência de veículos automotores.
          Desenvolvimento em Vue3 e NodeJS.
        </template>
        <template v-slot:under-development
          >Em desenvolvimento</template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          Gerador de senha forte
        </template>
        <template v-slot:card-text>
          Simples gerador de senha forte desenvolvido com Nuxt3 com
          intuido de ajudar na criação de senhas temporárias.
        </template>
        <template v-slot:repo
          ><a
            href="https://gerador-de-senha-forte.netlify.app/"
            class="project-card-link"
            target="_blank"
            >Site</a
          ></template
        >
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Rede CAN Renault </template>
        <template v-slot:card-text>
          Projeto de engenharia reversa da rede CAN da linha nacional
          renault para desenvolvimento de soluções automotivas para
          esta linha.
        </template>
        <template v-slot:repo
          ><a
            href="https://www.linkedin.com/posts/gabriel-ant%C3%B4nio-de-vasconcellos-barreto-547957190_engenhariadacomputacao-estudos-can-activity-6761087506030092288-7Icc?utm_source=share&utm_medium=member_desktop"
            class="project-card-link"
            target="_blank"
            >Post</a
          ></template
        >
      </ProjectCard>
    </div>
    <Footer></Footer>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
