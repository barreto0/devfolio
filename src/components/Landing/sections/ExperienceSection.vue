<template>
  <div class="timeline-background min-vh-100">
    <div class="col-md-8 offset-md-3 text-white mt-5">
      <p class="job-title">
        {{ $t('experience_section.the_road_so_far') }}
      </p>
      <ul class="timeline">
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.fullstack_developer') }} -
            Freelancer (2015 - {{ $t('experience_section.current') }})
          </p>
          <p>
            {{ $t('experience_section.freelancer_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.fullstack_developer') }} -
            Fornax (09/2022 - {{ $t('experience_section.current') }})
          </p>
          <p>{{ $t('experience_section.fornax_description') }}</p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.frontend_developer') }}
            {{ $t('experience_section.and') }} Mobile - Keener.io
            Inovations (09/2021 - 09/2022)
          </p>
          <p>
            {{ $t('experience_section.keener_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.fullstack_developer') }}
            {{ $t('experience_section.and') }} Mobile - React-it
            (01/2021 - 09/2021)
          </p>
          <p>
            {{ $t('experience_section.reactit_dev_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.junior_developer') }} - React-it
            (10/2020 - 01/2021)
          </p>
          <p>
            {{ $t('experience_section.reactit_junior_description') }}
          </p>
        </li>

        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.intern_developer') }} -
            {{ $t('experience_section.senate') }}
            (03/2019 - 10/2020)
          </p>
          <p>
            {{ $t('experience_section.senate_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.associate') }}/{{
              $t('experience_section.frontend_developer')
            }}
            {{ $t('experience_section.and') }} Mobile - NoQueue
            (08/2018 - 09/2019)
          </p>
          <p>
            {{ $t('experience_section.noqueue_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.intern_developer') }} -
            {{ $t('experience_section.ministry') }} (03/2018 -
            11/2018)
          </p>
          <p>
            {{ $t('experience_section.ministry_description') }}
          </p>
        </li>
        <li>
          <p class="timeline-experience-title">
            {{ $t('experience_section.associate') }}/{{
              $t('experience_section.graphic_designer')
            }}
            - Beyond (08/2016 - 09/2017)
          </p>
          <p>
            {{ $t('experience_section.beyond_description') }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
'ExperienceSection';
</script>
<style scoped>
ul.timeline {
  list-style-type: none;
  position: relative;
}
ul.timeline:before {
  content: ' ';
  background: #d4d9df;
  display: inline-block;
  position: absolute;
  left: 29px;
  width: 2px;
  height: 100%;
  z-index: 400;
}
ul.timeline > li {
  margin: 20px 0;
  padding-left: 20px;
}
ul.timeline > li:before {
  content: ' ';
  background: #c044ec;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #c044ec;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 400;
}
</style>
