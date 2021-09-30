<template>
  <div class="box" id='nav-bar'>
    <div class="leftnav" :style='lay_left'>
      <slot name="leftnav"></slot>
    </div>
    <div class="centernav" :style='lay_center'>
      <slot name="centernav"></slot>
    </div>
    <div class="rightnav" :style='lay_right'>
      <slot name="rightnav"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
	props:{
		lay_left:{
			type: Object,
			default(){
				return {}
			}
		},
		lay_center:{
			type: Object,
			default(){
				return {}
			}
		},
		lay_right:{
			type: Object,
			default(){
				return {}
			}
		},
	},
  components: {},
};
</script>

<style scoped>
#nav-bar{
  position: relative;
  z-index: 10;
}
.box {
  height: 44px;
  /* background-color: deeppink; */
  display: flex;
  justify-content: space-around;
  line-height: 44px;
  text-align: center;
  overflow: hidden;
}
.leftnav,
.rightnav {
  width: 60px;
}
.centernav {
  flex: 1;
}
</style>