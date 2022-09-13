<template>
  <div class="container vh-100">
    <div
      class="h-100 justify-content-center d-flex align-items-center flex-column"
    >
      <p class="text-light text-center name text-focus-in">
        GABRIEL BARRETO<span class="end-point">.</span>
      </p>

      <!-- <a
        class="typewrite job-title no-hover text-center"
        style="text-decoration: none"
        data-period="2000"
        data-type='[ "Engenheiro da Computação.", "Desenvolvedor Fullstack.", "Desenvolvedor Mobile."]'
      >
        <span class="wrap"></span>
      </a> -->
      <p class="job-title text-center">
        {{ $t('name_section.computer_engineer')
        }}<span class="end-point">.</span>
      </p>
      <p class="job-title text-center">
        {{ $t('name_section.fullstack_developer')
        }}<span class="end-point">.</span>
      </p>
      <!-- <p class="job-title text-center">
        {{ $t('name_section.mobile_developer')
        }}<span class="end-point">.</span>
      </p> -->
    </div>
    <div class="container text-center" style="margin-top: -16.5vh">
      <div class="row">
        <div class="col align-self-center">
          <p class="text-light m-0 p-0">
            {{ $t('name_section.scroll_down')
            }}<span class="end-point">.</span>
          </p>
          <font-awesome-icon
            class="animated-chevron-down bounce arrow-down"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: 'NameSection',
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
