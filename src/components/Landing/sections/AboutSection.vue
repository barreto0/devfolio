<template>
  <div class="vh-100 second-session-background">
    <div
      class="h-100 justify-content-center d-flex align-items-center flex-column"
    >
      <!-- <p class="text-light text-center name">
          Um pouco sobre mim<span class="end-point">.</span>
        </p> -->
      <p
        class="text-light text-center about-me"
        style="
          margin: 0 15%;
          text-align: justify;
          text-justify: inter-word;
        "
      >
        {{ $t('about_section.located_in') }}
        <a
          :href="
            $i18n.locale === 'en'
              ? 'https://en.wikipedia.org/wiki/Bras%c3%adlia'
              : 'https://pt.wikipedia.org/wiki/Bras%c3%adlia'
          "
          class="links-purple"
          target="_blank"
          >Brasília</a
        >
        {{ $t('about_section.fluent_in')
        }}<span class="end-point">.</span><br />
        {{ $t('about_section.with_expertise')
        }}<span class="end-point">.</span>
      </p>
    </div>
    <div class="container text-center" style="margin-top: -8vh">
      <div class="row">
        <div class="col align-self-center">
          <font-awesome-icon
            class="animated-chevron-down bounce arrow-down-white"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
'AboutSection';
</script>
