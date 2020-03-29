<template>
  <div class="shop-item">
   <td>
      <tr><b>{{ title }}</b></tr>
      <tr><i>{{ author }}</i></tr>
      <tr><img v-bind:src="this.coverUrl" /></tr>
      <tr>Number of pages: {{ pages }}</tr>
      <tr>Price: {{this.computedPrice}}</tr>
      <span style="height: 5px;"></span>
      <button class="button">Order</button>
      <div style="clear:both;"></div>
      <button class="button">Add to cart</button>
    </td>
  </div>
</template>

<script>
export default {
  props: {
    id: { Type: Number, required: true },
    title: { Type: String, required: true },
    author: { Type: String, required: true },
    coverUrl: { Type: String, required: true },
    pages: { Type: Number, required: true },
    price: { Type: Number, required: true },
    currency: { Type: String, required: true },
  },
  computed: {
    computedPrice() {
      return `${this.price / 100} ${this.currency}`;
    },
  },
};
</script>

<style scoped lang="scss">
.shop-item {
  max-width: 250px;
  margin-bottom: 30px;
}

tr img {
  object-fit: contain;
  float: left;
  margin-right: 6px;
  width: 100%;
  max-height: 250px;
}

.button {
  background-color: #4CAF50;
  border-radius: 4px;
  margin: 3px;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button:hover {
  background-color: #484a49;
}
</style>
