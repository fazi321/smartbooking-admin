<template>
    <div class="image-container">
      <div class="profile-avatar">
        <img src="../../assets/images/user-icon.svg" alt="user-icon"/>
      </div>
      <div class="profile-primary">
        <h5>{{$store.state?.user?.firstName ? $store.state.user.firstName : 'Hello, George'}}</h5>
        <h6>Admin</h6>
      </div>
    </div>
</template>
<script>
export default {
    name:'profileAvatar'
    
}
</script>
<style scoped>
.image-container {
  display: flex;
  align-items: center;
  margin-right: 34px;
}
.image-container .profile-avatar {
  width: 34px;
  height: 34px;
  background: #eee;
  border-radius: 50%;
  margin-right: 10px;
}
.profile-primary h5 {
  text-align: left;
  line-height: 1.4;
  font-size: 14px;
}
.profile-primary h6 {
  text-align: left;
  font-size: 12px;
  color: #b4b7b9;
}

</style>>