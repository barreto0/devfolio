<template>
  <div class="container min-vh-100">
    <div
      class="row h-100 align-items-center"
      style="margin-top: 10vh"
    >
      <SkillCard>
        <template v-slot:icon>
          <font-awesome-icon
            class="skill-card-icon"
            icon="fa-solid fa-gears"
          />
        </template>
        <template v-slot:title-skill> Engenharia </template>
        <template v-slot:card-text>
          Do IoT ao projeto de peças sob medida para as mais diversas
          aplicações. Sempre prezo pela qualidade e eficiência dos
          trabalhos que desenvolvo, buscando o equilíbrio entre
          orçamento e qualidade.
        </template>
        <template v-slot:expertise-title> Especialidade </template>
        <template v-slot:expertise>
          Soluções em automação residencial e do campo, projetos sob
          medida, soluções em eletrônica automotiva.
        </template>
        <template v-slot:tools-name>
          Principais Hardwares e Ferramentas
        </template>
        <template v-slot:tools>
          <ul>
            <li class="text-start skill-card-text">
              STM32*, ATMEGA*, ESP*, PIC16F*
            </li>
            <li class="text-start skill-card-text">
              CAN, MQQT, Tasmota
            </li>
            <li class="text-start skill-card-text">
              EasyEDA, Eagle, Fusion360
            </li>
          </ul>
        </template>
      </SkillCard>

      <SkillCard>
        <template v-slot:icon>
          <font-awesome-icon
            class="skill-card-icon"
            icon="fa-solid fa-code"
          />
        </template>
        <template v-slot:title-skill> Desenvolvimento </template>
        <template v-slot:card-text>
          Frontend, Backend ou Mobile. Seja a vertente desenvolvo com
          TDD o seu projeto de ponta a ponta, com a qualidade
          necessária para futuras manutenções e implementação de novas
          features.
        </template>
        <template v-slot:expertise-title> Especialidade </template>
        <template v-slot:expertise>
          Do mais simples gerenciador de músicas de karaokê ao mais
          completo sistema de backoffice com uso de websockets.
        </template>
        <template v-slot:tools-name>
          Principais Tecnologias
        </template>
        <template v-slot:tools>
          <ul>
            <li class="text-start skill-card-text">
              Vanilla, Vue, Nuxt
            </li>
            <li class="text-start skill-card-text">
              Flutter, Android Native
            </li>
            <li class="text-start skill-card-text">
              Node + Express, C# + Entity Framework
            </li>
          </ul>
        </template>
      </SkillCard>

      <SkillCard>
        <template v-slot:icon>
          <font-awesome-icon
            class="skill-card-icon"
            icon="fa-solid fa-user-ninja"
          />
        </template>
        <template v-slot:title-skill> Soft Skills </template>
        <template v-slot:card-text>
          Com comunicação e agilidade orquestro com maestria as
          entregas do seu projeto. Sempre mantendo clareza e
          transparência com o cliente, do contrato à entrega final.<br /><br />Com
          sede de conhecimento sempre estou em busca de novas
          tecnologias e tendências mais atuais do mercado.<br /><br />Não
          existe tecnologia ou paradigma que eu não encare, me traga
          um framework obscuro e lhe entregarei um produto que atenda
          as suas expectativas.
        </template>
      </SkillCard>
    </div>
    <div class="container text-center" style="margin-top: 5vh">
      <div class="row">
        <div class="col align-self-center">
          <font-awesome-icon
            class="animated-chevron-down bounce arrow-down"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SkillCard from '../components/SkillCard.vue';
('SkillsSection');
export default {
  components: {
    SkillCard,
  },
};
</script>
