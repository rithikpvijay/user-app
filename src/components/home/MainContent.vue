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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 12rem; */
}
h1 {
  font-size: 54px;
  line-height: 1;
  margin-bottom: 24px;
}

p {
  margin-bottom: 32px;
}

img {
  width: 24rem;
}
</style>
