<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          class="pagination-item_btn"
      >
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="pagination-item_btn"
      >
        Previous
      </button>
    </li>

    <!-- Visible Buttons Start -->

    <li
        class="pagination-item"
        v-for="page in pages"
        :key="page"
    >
      <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          class="pagination-item_btn"
      >
        {{ page.name }}
      </button>
    </li>

    <!-- Visible Buttons End -->

    <li class="pagination-item">
      <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="pagination-item_btn"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          class="pagination-item_btn"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PaginationPage",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) return 1;
      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
          let i = this.startPage;
          i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
          i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  },
  mounted() {
    this.onClickFirstPage();
  }
}
</script>

<style>
.pagination {
  list-style-type: none;
  padding-bottom: 30px;
}

.pagination-item {
  display: inline-block;
  padding: 5px 5px;
}

button {
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  border: none;
  border-radius: 3px;
}

.pagination-item_btn {
  width: 60px;
  height: 25px;
}
.active {
  background-color: #4AAE9B;
  color: #ffffff;
}

.active:hover {
  background-color: #7ebbaf !important;
}
.pagination-item_btn:hover {
  background-color: #e4f3f0;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
}


</style>