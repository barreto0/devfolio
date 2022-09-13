<template>
  <div class="col-lg-5 col-md-6 col-sm-12">
    <div class="article-card">
      <div>
        <p class="text-center article-card-title">
          <slot name="title-article"></slot>
        </p>
      </div>
      <div>
        <p class="article-card-text">
          <slot name="card-text"></slot>
        </p>
      </div>
      <div class="row">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>
