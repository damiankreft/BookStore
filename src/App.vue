<template>
  <div>
    <div >
      <form>
      <input type="text" placeholder="Search.." name="search" class="searchbox">
    </form>
    </div>
    <div id="shop">
      <b-container class="bv-example-row">
        <b-row>
          <div v-for='product in products' :key='product.id'>
            <b-col>
              <Product v-bind='product' />
            </b-col>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Product from './components/Product.vue';

export default {
  components: { Product },
  data() {
    return {
      page: 1,
      products: [],
      numberOfItems: 0,
      numberOfItemsOnPage: 0,
    };
  },
  methods: {
    fetchProducts() {
      this.$http
        .get('/book', { params: { page: this.page } })
        .then(({ data: { data, meta: { totalRecords, recordsPerPage } } }) => {
          this.products = data;
          this.numberOfItems = totalRecords;
          this.numberOfItemsOnPage = recordsPerPage;
          console.log(data);
        });
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss">
#shop {
  margin: 30px;
}

form {
  width: 500px;
  margin: 20px auto;
}

.searchbox {
  padding: 5px;
  width: 100%;
}

.shop-search {
  width: 30px;
  height: 30px;
}
</style>
