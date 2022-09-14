<template>
  <div class="background px-5">
    <Navbar></Navbar>
    <p class="job-title text-center mt-5">
      {{ $t('navbar.portfolio') }}<span class="end-point">.</span>
    </p>
    <div class="row h-100 mt-5 p-0">
      <ProjectCard>
        <template v-slot:title-skill> NoQueue </template>
        <template v-slot:card-text>
          {{ $t('portfolio.no_queue_description') }}
        </template>
        <template v-slot:under-development>{{
          $t('portfolio.uncontinued')
        }}</template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Meu HIIT </template>
        <template v-slot:card-text>
          {{ $t('portfolio.meu_hiit_description') }}
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
          {{ $t('portfolio.dinoday_description') }}
        </template>
        <template v-slot:under-development>{{
          $t('portfolio.in_development')
        }}</template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.strong_password') }}
        </template>
        <template v-slot:card-text>
          {{ $t('portfolio.strong_password_description') }}
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
        <template v-slot:title-skill>
          {{ $t('portfolio.renault_can_title') }}
        </template>
        <template v-slot:card-text
          >{{ $t('portfolio.renault_can_description') }}
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
      <ProjectCard>
        <template v-slot:title-skill> Quizter </template>
        <template v-slot:card-text>
          {{ $t('portfolio.quizter_description') }}
        </template>
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.quizter&hl=pt_BR&gl=US"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Plugg.to </template>
        <template v-slot:card-text>{{
          $t('portfolio.pluggto_description')
        }}</template>
        <template v-slot:repo
          ><a
            href="https://play.google.com/store/apps/details?id=com.pluggto&hl=pt_BR&gl=US"
            class="project-card-link"
            target="_blank"
            >Google Play</a
          ></template
        >
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill> Cerberus </template>
        <template v-slot:card-text>
          {{ $t('portfolio.cerberus_description') }}
        </template>
        <template v-slot:no-status>-</template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.reactit_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.astrology_software_title') }}
        </template>
        <template v-slot:card-text>
          {{ $t('portfolio.astrology_software_description') }}
        </template>
        <template v-slot:no-status>-</template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.live_quiz_title') }}
        </template>
        <template v-slot:card-text>{{
          $t('portfolio.live_quiz_description')
        }}</template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill
          >{{ $t('portfolio.totem_software_title') }}
        </template>
        <template v-slot:card-text>
          {{ $t('portfolio.totem_software_description') }}
        </template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.health_software_title') }}
        </template>
        <template v-slot:card-text>
          <li>
            {{ $t('portfolio.health_software_description_1') }}
          </li>
          <li>
            {{ $t('portfolio.health_software_description_2') }}
          </li>
        </template>
        <template v-slot:company>
          <span class="end-point">*</span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.worked_hours_title') }}
        </template>
        <template v-slot:card-text>{{
          $t('portfolio.worked_hours_description')
        }}</template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.bs2_title') }}
        </template>
        <template v-slot:card-text>{{
          $t('portfolio.bs2_description')
        }}</template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.reactit_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.social_media_title') }}
        </template>
        <template v-slot:card-text>
          {{ $t('portfolio.social_media_description') }}
        </template>
        <template v-slot:company>
          <span class="end-point">* </span
          >{{ $t('portfolio.keener_participation') }}
        </template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.obd2_reader_title') }}
        </template>
        <template v-slot:card-text>
          {{ $t('portfolio.obd2_reader_description') }}
        </template>
        <template v-slot:under-development>{{
          $t('portfolio.in_development')
        }}</template>
      </ProjectCard>
      <ProjectCard>
        <template v-slot:title-skill>
          {{ $t('portfolio.check_in_title') }}
        </template>
        <template v-slot:card-text>{{
          $t('portfolio.check_in_description')
        }}</template>
        <template v-slot:under-development>{{
          $t('portfolio.in_development')
        }}</template>
      </ProjectCard>
    </div>
    <Footer></Footer>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
