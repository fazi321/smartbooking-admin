<template>
  <default-layout>
    <section class="main-wrapper">
      <div class="top-heading">
        <h2>{{ myPage.page }}</h2>
        <p>
          {{ myPage.subTitle }}
        </p>
      </div>
      <section class="primary">
        <div class="add-block" v-for="(page, index) in pageData" :key="index">
          <div>
            <h4>Heading {{ index + 1 }}</h4>
            <p>Add the heading and text here</p>
          </div>
          <div class="inputs">
            <div>
              <input type="text" placeholder="Title" />
            </div>
            <div>
              <textarea type="text" placeholder="Text body" />
            </div>
          </div>
        </div>
      </section>
      <div class="bottom-add" @click="addNew">
        <p>+ Add More Headings</p>
      </div>
      <div class="uploadBtn">
        <button>Update</button>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
export default {
  name: "FrontEnd",
  components: { DefaultLayout },
  data() {
    return {
      myPage: null,
      pageData: ["new","new"],
      pageHeader: [
        {
          id: "privacy-policy",
          page: "Privacy Policy",
          subTitle:
            "You can see the Privacy Policy content here you can edit the page content here",
        },
        {
          id: "faqs",
          page: "FAQ's",
          subTitle:
            "You can see the faq's content here also you can edit the page content here",
        },
        {
          id: "terms",
          page: "Terms of use",
          subTitle:
            "You can see the terms content here also you can edit the page content here",
        },
        {
          id: "about-us",
          page: "About Us",
          subTitle:
            "You can see the about content here also you can edit the page content here",
        },
      ],
    };
  },
  methods: {
    addNew() {
      this.pageData.push("new");
    },
  },
  watch: {
    "$route.params": {
      immediate: true,
      handler(val) {
        this.myPage = this.pageHeader.find((key) => key.id == val.page);
      },
    },
  },
};
</script>

<style scoped>
.top-heading {
  line-height: 1.8;
}
.top-heading h2 {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  font-size: 16px;
}
.top-heading p {
  text-align: left;
  letter-spacing: 0px;
  color: #808183;
  font-size: 12px;
}
.primary {
  height: 530px;
  overflow-y: scroll;
}
.add-block {
  text-align: left;
  margin: 14px 0;
}
.add-block h4 {
  font-size: 14px;
  margin-bottom: 12px;
}
.add-block p {
  font-size: 12px;
}
.inputs input,
.inputs textarea {
  outline: none;
  font-size: 12px;
  padding: 14px 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 0px 0px 8px 2px #e9e8e8;
  color: #c4c4c4;
  width: 30%;
  margin: 14px 0 8px 0;
}
.inputs textarea {
  height: 123px;
  border-radius: 20px;
}
.bottom-add p {
  width: 30%;
  color: #febb12;
  cursor: pointer;
  font-size: 14px;
  margin-top:10px;
}
.uploadBtn button {
  border: none;
  outline: none;
  border-radius: 24px;
  background: #febb12;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px 1px #c9c9c9a6;
  width: 17%;
  margin-top: 8px;
}
</style>
