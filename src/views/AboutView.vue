<template>
  <default-layout>
    <section class="container">
      <div class="privacy">
        <h1>ABOUT US</h1>
      </div>
      <div class="content">
        <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor lacus, fermentum vitae sagittis ultrices, imperdiet ac eros. Morbi lobortis lectus nec neque laoreet tincidunt. Praesent iaculis congue laoreet. Quisque ornare vulputate metus, et mollis elit aliquet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in blandit lorem. Nulla in est non metus faucibus ultricies id rhoncus dui. Nunc egestas aliquam erat, eu fringilla tortor gravida ac.</p>
        <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor lacus, fermentum vitae sagittis ultrices, imperdiet ac eros. Morbi lobortis lectus nec neque laoreet tincidunt. Praesent iaculis congue laoreet. Quisque ornare vulputate metus, et mollis elit aliquet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in blandit lorem. Nulla in est non metus faucibus ultricies id rhoncus dui. Nunc egestas aliquam erat, eu fringilla tortor gravida ac.</p>
        <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor lacus, fermentum vitae sagittis ultrices, imperdiet ac eros. Morbi lobortis lectus nec neque laoreet tincidunt. Praesent iaculis congue laoreet. Quisque ornare vulputate metus, et mollis elit aliquet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in blandit lorem. Nulla in est non metus faucibus ultricies id rhoncus dui. Nunc egestas aliquam erat, eu fringilla tortor gravida ac.</p>
        <h3>LOREM IPSUM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tortor lacus, fermentum vitae sagittis ultrices, imperdiet ac eros. Morbi lobortis lectus nec neque laoreet tincidunt. Praesent iaculis congue laoreet. Quisque ornare vulputate metus, et mollis elit aliquet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in blandit lorem. Nulla in est non metus faucibus ultricies id rhoncus dui. Nunc egestas aliquam erat, eu fringilla tortor gravida ac.</p>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout
  }
};
</script>
<style scoped>
.privacy {
  padding: 30px 0;
}
.privacy h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.content {
  padding: 20px 0;
  line-height: 1.8;
}
.content h3 {
  text-align: left;
  letter-spacing: 0.6px;
  color: #febb12;
  opacity: 1;
  font-size: 16px;
}
.content p {
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  padding: 10px 0 20px 0;
}
</style>
