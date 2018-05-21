<template>
        <div class = "input">
            <slot name = "icon"></slot>
            <input type="text" class = "input-inner" :style  = "inputstyle"  v-model = "inputData" placeholder="请输入商品信息">
        </div>
</template>

<script>
export default {
        props:["inputstyle"],
        data(){
            return {
                inputData:""
            }
        }
}
</script>

<style scoped>
      @import url("../public/iconfont.css");

    .input{
        width:100%;line-height:1rem;
        border-radius:1rem;
     
        text-align: center;
        background:#fff;
  

    }
    .input-inner{
        outline:none;
        text-align: left;
        line-height:1rem;
        border:0px #ccc solid;
        font-size:0.5rem;
    

    }

</style>
