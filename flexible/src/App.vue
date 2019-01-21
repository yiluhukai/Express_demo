<template>
  <div id="app">
    <div class="center">
      <div class="title">
        获取更多次数
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .px2rem(@name, @px) {
      @{name}: @px / 75 * 1rem;
  }

  .center {
    .px2rem(height, 247);
    .px2rem(width, 692);
    background: rgba(206, 137, 220, 1);
    .px2rem(border-radius, 20);
    border: 1px solid red;
    margin: 100px auto;
    position: relative;
    .title {
      .px2rem(width, 370);
      .px2rem(height, 66);
      position: absolute;
      .px2rem(top, -25);
      .px2rem(left, 160);
      background: rgba(144, 88, 247, 1);
      .px2rem(border-radius, 33);
      font-size:40px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(251,251,255,1);
      line-height:38px;
      text-align: center;
    }


  }
</style>
