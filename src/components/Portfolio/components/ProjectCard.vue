<template>
  <div class="col-lg-3 col-md-4 col-sm-12 px-3">
    <div class="project-card">
      <div>
        <p class="text-center project-card-title">
          <slot name="title-skill"></slot>
        </p>
      </div>
      <div style="min-height: 18vh">
        <p class="project-card-text">
          <slot name="card-text"></slot>
        </p>
      </div>
      <div>
        <div
          class="mx-auto"
          style="
            margin-top: 2vh;
            background-color: #c044ec;
            border-radius: 12px;
          "
        >
          <p class="text-center"><slot name="repo"></slot></p>
        </div>
      </div>
      <div
        class="mx-auto"
        style="
          margin-top: 2vh;
          background-color: gray;

          border-radius: 12px;
        "
      >
        <p class="text-center text-white">
          <slot name="under-development"></slot>
        </p>
      </div>
      <div
        class="mx-auto"
        style="
          margin-top: 2vh;
          background-color: #1f1f1f;
          border-radius: 12px;
        "
      >
        <p class="text-center" style="color: #1f1f1f">
          <slot name="no-status"></slot>
        </p>
      </div>
      <div>
        <p class="text-white"><slot name="company"></slot></p>
      </div>
    </div>
  </div>
</template>
