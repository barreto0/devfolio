<template>
  <div class="background">
    <Navbar></Navbar>
    <p class="job-title text-center mt-5">
      {{ $t('contact_page.lets_be_friends')
      }}<span class="end-point">!</span>
    </p>
    <p class="about-me text-center mt-5">
      {{ $t('contact_page.find_me') }}
    </p>
    <div class="text-center mt-5">
      <a
        href="https://www.linkedin.com/in/gabriel-ant%C3%B4nio-de-vasconcellos-barreto-547957190
        "
        target="_blank"
        ><font-awesome-icon
          class="social-media-icon"
          icon="fa-brands fa-linkedin"
      /></a>
      <a
        href="https://github.com/barreto0
        "
        target="_blank"
        ><font-awesome-icon
          class="social-media-icon"
          icon="fa-brands fa-github"
      /></a>
    </div>
    <p class="about-me text-center mt-5">
      {{ $t('contact_page.send_email') }}
    </p>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
