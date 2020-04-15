<template>
    <div v-if="Object.keys(detailItemParams).length !== 0">
      <div class="detail-params-top">{{detailItemParams.rule.key}}</div>
      <div class="detail-params-disclaimer">{{detailItemParams.rule.disclaimer}}</div>
        <table class="table">
          <tr v-for="(item, index) in detailItemParams.rule.tables[0]" :key="index" class="detail-params-size">
           <td>{{item[0]}}</td>
           <td>{{item[1]}}</td>
           <td>{{item[2]}}</td>
           <td>{{item[3]}}</td>
          </tr>
        </table>

        <table class="detail-params-bottom">
          <tr v-for="(item, index) in detailItemParams.info.set" :key="index">
            <td class="detail-params-bottom-key">{{item.key}}</td>
            <td class="detail-params-bottom-value">{{item.value}}</td>
          </tr>
        </table>
    </div>
</template>

<script>
export default {
  props: {
    detailItemParams:{
      type:Object,
      default:{}
    }
  }
 
}
</script>

<style scoped>
.detail-params-top {
  padding: 20px 0 ;
}
.detail-params-disclaimer {
  padding-bottom: 20px;
}

.table {
  width: 100%;
}

.detail-params-size td:nth-child(2){
  text-align: center;
}
.detail-params-size td:nth-child(3){
  text-align: center;
}
.detail-params-size td:nth-child(4){
  text-align: center;
}
.detail-params-bottom {
  line-height: 30px;
  font-size: 12px;
  padding-bottom: 40px;
  border-bottom: 10px solid rgba(244, 244, 244, 1);
}
.detail-params-bottom-key {
  width: 25%;
}
.detail-params-bottom-value {
  width: 75%;
  font-size: 10px;
  color: red;
}
</style>
