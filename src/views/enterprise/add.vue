<template>
  <div class="warp-main">
    <el-row v-loading="loading" element-loading-text="拼命加载中">
      <el-col :span="24" class="toolbar">
        <el-form :inline="true" :model="filters">
          <el-form-item>
            <!-- <el-input v-model="filters.keyword" placeholder="请输入项目名" auto-complete="off" @keyup.enter.native="handleSearch"></el-input> -->
            <el-select v-model="projectNameOld" placeholder="项目名" ref="select" focus="hancleClick">
                <el-option v-for="item in infoData" :key="item.cpNum" :label="item.poject_name" :value="item.poject_name" v-if="item.poject_name == item.poject_name">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="cpNumOld" placeholder="CP号" ref="select">
                <el-option v-for="item in infoData" :key="item.cpNum" :label="item.cpNum" :value="item.cpNum">
                </el-option>
            </el-select>
            <!-- <el-input v-model="filters.cpNum" placeholder="CP号" auto-complete="off" @keyup.enter.native="handleSearch"></el-input> -->
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" v-on:click="handleSearch">检索</el-button>
          </el-form-item>          
           <!-- <el-form-item>
            <el-button type="success" size="medium" v-on:click="handleSearch">确定</el-button>
          </el-form-item> -->
          <el-form-item class="pull-right">
            <el-button type="info" size="small" icon="el-icon-plus" @click="addPlan">添加Device</el-button>
          </el-form-item>
          <el-form-item class="pull-right">
            <el-input v-model="device[0].projectNmae" placeholder="添加的项目名" auto-complete="off" @keyup.enter.native="handleSearch"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <!--表格数据-->
      <el-col :span="24" class="table-wrapper">
        <el-table :data="infoData" stripe style="width: 100%" @row-click="planDetail">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="info-table-expand">    
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text}}</span>
                </el-form-item>
                 <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit1}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text1}}</span>
                </el-form-item>
                 <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn1}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit2}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text2}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn2}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit3}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text3}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn3}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit4}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text4}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn4}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit5}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text5}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn5}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit6}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text6}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn6}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit7}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text7}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn7}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit8}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text8}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn8}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit9}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text9}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn9}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit10}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text10}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn10}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit11}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text11}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn11}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit12}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text12}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn12}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit13}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text13}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn13}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit14}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text14}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn14}}</span>
                </el-form-item>
                <el-form-item label="Bit：">
                  <span>{{props.row.device_bit15}}</span>
                </el-form-item>           
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text15}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn15}}</span>
                </el-form-item>
                <!-- <el-form-item label="Bit：">
                  <span>{{props.row.device_bit16}}</span>
                </el-form-item>
                <el-form-item label="信号名：">
                  <span>{{props.row.device_text16}}</span>
                </el-form-item>
                <el-form-item label="Lsn：">
                  <span>{{props.row.device_lsn16}}</span>
                </el-form-item> -->
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="项目名" prop="poject_name"></el-table-column>
          <el-table-column label="CP号" prop="cp_num"></el-table-column>
          <el-table-column label="Device" prop="device_num"></el-table-column>          
          <el-table-column label="操作">
            <template slot-scope="prop">
              <!-- <el-button type="primary" icon="el-icon-edit" circle @click.native.prevent="handleUpdate(props.row)"></el-button> -->
              <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(prop.row)"></el-button>
            </template>
          </el-table-column>          
        </el-table>
      </el-col>
      <!-- 增加Device弹出的框 -->
      <el-dialog :visible.sync="dialogVisible" :v-if="dialogVisible" :title="dialogType==='edit'?'Edit Role':'Device'" :destroy-on-close="true" @close="handleClose" :close-on-click-modal='false'>
      <el-form :model="device" label-width="80px" label-position="left">
        <el-form-item>
          <el-input v-model="device[0].cpNum" style="width:100PX" placeholder="CP号"/>
          <el-input v-model="device[0].deviceNum" style="width:100PX" placeholder="Device"/>
        </el-form-item>
        <el-form-item v-for="(v,i) in device" :key="i">
          <el-input v-model="device[i].Bit" style="width:100PX" placeholder="Bit"/>
          <el-input v-model="device[i].Text" style="width:350PX" placeholder="信号名"/>
          <el-input v-model="device[i].Lsn" style="width:100PX" placeholder="Lsn"/>
          <el-button type="primary" icon="el-icon-plus" circle @click="onSubmit(i)" v-show="i < 15" v-if="count == i"></el-button>
        </el-form-item>      
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole">提交</el-button>
      </div>
    </el-dialog>
      <!--分页-->
      <el-col :span="24" class="toolbar">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="currentPage" :page-sizes="[10, 50, 100, 200]" :page-size="10"
                       layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import PlanDetail from './detail'
  import API from '../../api/api_user'
  export default {
    name: 'plan',
    data (){
      return {
        dialogType: 'new', // new代表新的提示框，edit则为编辑框
        dialogVisible: false, //弹出增加Device的表单
        loading: false, // 加载loading
        filters: [], // 添加项目和一共有多少个CP
        projectNameOld:'',
        cpNumOld:'',
        device:[{
          projectNmae:'',
          cpNum : '',
          deviceNum : '',
          Bit : '',
          Text : '',
          Lsn : ''
        }],
        total: 5,
        currentPage: 1,
        count:0,
        pageSize: 10,
        infoData: [],
        detailVisible: false, // 详情弹窗flag
        maskVisible: false, // 弹窗mask显示
        detail: null, // 详情ID
      }
    },
    components: {
      'plan-detail': PlanDetail
    },
    created() {
        this.getRoles()
    },
    watch:{
      "filters.keyword":{
        dialogVisible : true
      }
    },
    methods: {
      // 页面加载的时候同时加载显示数据
      async getRoles() {
        API.get('/allDeviceCv','alldevice')
          .then((res)=>{
            // alert(res.code)
            if(res.code === 20000){
              this.infoData = res.data;
            }else{
              that.dialogVisible = false;
               this.loading = false;
               this.$message.error("提交出错");
            }
            console.log(res)
          })
      },
      addPlan() {
        if(this.device[0].projectNmae == ''){
          this.$message.error("请输入需要添加的项目名");
          return false;
        }
        this.dialogVisible = true;
      },
      // 详情
      planDetail(row, event, column) {
        this.detail = row;
        this.maskVisible = true;
      },
      // 关闭详情弹窗
      cancelVisible() {
        this.maskVisible = false;
        this.detailVisible = false;
      },
      hancleClick(){
        alert("dsad")
        alert(this.projectNameOld)
      },
      // search data
      handleSearch() {
        alert(this.projectNameOld)
        API.post('/addPojectName',JSON.stringify(this.filters))
          .then((res)=>{
            if(res.code === 20000){
              this.$message({
                  type: 'success',
                  message: res.message
              });
            }else{
               this.$message.error("提交出错");
            }
            console.log(res)
          });
        // ...
      },
      // 选择每页显示条数
      handleSizeChange(val){
      //  this.pageSize = val;
      //  this.currentPage = 1;
      },
      // 跳转页
      handleCurrentChange(val){
//        this.currentPage = val;
      },
      // 点击加号增加一列
      onSubmit(index){
        if(this.device[index].Lsn == '' || this.device[index].Text == '' || this.device[index].Bit == ''){
            this.$message({
              type: 'error',
              message: '没有填写对应的内容'
            })
        }else{
          this.count = this.count + 1;
          this.device.push({Bit:'',Text:'',Lsn:''})
        }
      },
      // 弹出框的提交
      confirmRole(){
        if(this.device[0].Lsn == '' || this.device[0].Text == '' || this.device[0].Bit == '' || this.device[0].deviceNum == ''){
            this.$message({
              type: 'error',
              message: '没有填写对应的内容'
            })
            return false;
        }
        let that = this;
        API.post('/addDeviceCv',JSON.stringify(this.device))
          .then((res)=>{
            if(res.code === 20000){
              that.dialogVisible = false;
              this.$message({
                  type: 'success',
                  message: res.message
              });
              that.getRoles();
            }else{ 
              that.dialogVisible = false;
                this.loading = false;
                this.$message.error(res.message);
                that.getRoles();
            } 
            console.log(res)
          })          
      },
      // 清空填写的数据
      handleClose(){        
        Object.assign(this.$data, this.$options.data());
        this.getRoles();
      },
      // 修改device 暂时不用，后续考虑怎么改
      handleUpdate(row){
        console.log(row)
        this.device[0].Lsn = row;
        alert(this.device[0].Lsn);
        this.dialogVisible = true;
      },
      // 删除这个device
      handleDelete(row){
        let that = this;
        API.delete('/deleteDeviceCv',JSON.stringify(row))
          .then((res)=>{
            if(res.code === 20000){
              that.dialogVisible = false;
              this.$message({
                  type: 'success',
                  message: res.message
              });
              that.getRoles();
            }
          })
      }
    }
  }
</script>
<style>
  .info-table-expand {
    font-size: 0;
  }
  .info-table-expand label {
    width: 80px;
    color: chocolate;
  }
  .info-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 30%;
    text-align: justify;
  }
  .detail-box {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    height: 100%;
    overflow-y: auto;
    z-index: 2000;
    background-color: #fff;
  }
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #000;
    opacity: .3;
  }
  .el-dialog{
       top:0%;
       width: 38%;
   }
</style>
