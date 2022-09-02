<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="text-center skill-card">
      <icon>
        <slot name="icon"></slot>
      </icon>
      <title-skill>
        <p class="text-center skill-card-title">
          <slot name="title-skill"></slot>
        </p>
      </title-skill>
      <card-text>
        <p class="skill-card-text"><slot name="card-text"></slot></p>
      </card-text>
      <expertise-title>
        <p class="text-center skill-card-subtitle">
          <slot name="expertise-title"></slot>
        </p>
      </expertise-title>
      <expertise>
        <p class="skill-card-text">
          <slot name="expertise"></slot>
        </p>
      </expertise>
      <tools-name>
        <p class="text-center skill-card-subtitle">
          <slot name="tools-name"></slot>
        </p>
      </tools-name>
      <tools>
        <slot name="tools"></slot>
      </tools>
    </div>
  </div>
</template>
<script>
'SkillCard';
</script>
