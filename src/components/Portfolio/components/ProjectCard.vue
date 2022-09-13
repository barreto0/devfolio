<template>
  <div class="col-lg-3 col-md-4 col-sm-12">
    <div class="project-card">
      <title-skill>
        <p class="text-center project-card-title">
          <slot name="title-skill"></slot>
        </p>
      </title-skill>
      <card-text>
        <p class="project-card-text">
          <slot name="card-text"></slot>
        </p>
      </card-text>
      <repo>
        <div
          class="mx-auto"
          style="
            margin-top: 4vh;
            background-color: #c044ec;
            width: 9vw;
            border-radius: 12px;
          "
        >
          <p class="text-center"><slot name="repo"></slot></p>
        </div>
      </repo>
      <under-development>
        <div
          class="mx-auto"
          style="
            margin-top: 4vh;
            background-color: gray;
            width: 13vw;
            border-radius: 12px;
          "
        >
          <p class="text-center text-white">
            <slot name="under-development"></slot>
          </p>
        </div>
      </under-development>
      <deploy-link>
        <slot name="deploy-link"></slot>
      </deploy-link>
    </div>
  </div>
</template>
