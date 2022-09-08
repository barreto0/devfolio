<template>
  <div class="container min-vh-100">
    <p class="job-title text-center mt-5">
      {{ $t('skills_section.player_cards')
      }}<span class="end-point">.</span>
    </p>
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
        <template v-slot:title-skill>
          {{ $t('skills_section.engineering') }}
        </template>
        <template v-slot:card-text>
          {{ $t('skills_section.engineering_description') }}
        </template>
        <template v-slot:expertise-title>
          {{ $t('skills_section.expertise') }}
        </template>
        <template v-slot:expertise>
          {{ $t('skills_section.expertise_description') }}
        </template>
        <template v-slot:tools-name>
          {{ $t('skills_section.main_hardware_and_tools') }}
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
        <template v-slot:title-skill>
          {{ $t('skills_section.development') }}
        </template>
        <template v-slot:card-text>
          {{ $t('skills_section.development_description') }}
        </template>
        <template v-slot:expertise-title>
          {{ $t('skills_section.expertise') }}
        </template>
        <template v-slot:expertise>
          {{ $t('skills_section.development_expertise') }}
        </template>
        <template v-slot:tools-name>
          {{ $t('skills_section.main_development_tech') }}
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
          {{ $t('skills_section.soft_skills_1') }}<br /><br />{{
            $t('skills_section.soft_skills_2')
          }}<br /><br />{{ $t('skills_section.soft_skills_3') }}
        </template>
      </SkillCard>
    </div>
    <div class="container text-center" style="margin-top: 3vh">
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
