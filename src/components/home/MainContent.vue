<template>
  <div class="container">
    <div class="main-header">
      <h1>Explore All Your Users <br />in One Place</h1>
      <p>Quickly discover, view, and connect with every user effortlessly</p>
      <base-button link class="fill" to="/users">Go to users</base-button>
    </div>

    <img src="/images/hero.jpg" alt="heroImage" />
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  gap: 15rem;
}

.main-header {
  margin-top: 8rem;
}
h1 {
  font-size: 54px;
  line-height: 1;
  margin-bottom: 16px;
}

p {
  margin-bottom: 32px;
}

img {
  width: 24rem;
}

@media (max-width: 1250px) {
  h1 {
    font-size: 42px;
  }
  p {
    font-size: 14px;
  }
  img {
    width: 20rem;
  }
  .container {
    gap: 12rem;
  }
}

@media (max-width: 1070px) {
  .container {
    gap: 6rem;
  }

  .main-header {
    margin-top: 5rem;
  }
}

@media (max-width: 950px) {
  h1 {
    font-size: 32px;
  }

  img {
    width: 16rem;
  }
}

@media (max-width: 855px) {
  .container {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
  .main-header {
    text-align: center;
  }
}
</style>
