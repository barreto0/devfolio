<template>
  <div class="background vh-100">
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
    <div class="mt-5" style="margin: 0 20vw">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          :placeholder="$t('contact_page.name')"
          :aria-label="$t('contact_page.name')"
          v-model="name"
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
          v-model="email"
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">{{
          $t('contact_page.message')
        }}</span>
        <textarea
          class="form-control"
          aria-label="With textarea"
          v-model="message"
        ></textarea>
      </div>
      <div class="input-group">
        <button
          style="
            background-color: #c044ec;
            color: #1f1f1f;
            margin-left: auto;
          "
          type="submit"
          @click="sendEmail()"
          class="btn btn-lg mt-3"
        >
          <span v-if="!loading">{{ $t('contact_page.send') }}</span>
          <div v-else class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>
    </div>
    <Footer style="margin-top: 16vh"></Footer>
  </div>
</template>
<style src="./styles.css"></style>
<script src="./index.js"></script>
