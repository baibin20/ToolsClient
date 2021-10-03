<template>
 <el-form  ref="form" :model="form" label-width="300px" :rules="rules">
  <el-form-item label="托盘号" prop="code_pallet">
    <el-input v-model="form.code_pallet" style="widht:40px"></el-input>
  </el-form-item>
  <el-form-item label="托盘种类">
    <el-select v-model="form.code_categry" placeholder="请选择托盘种类">
    <el-option
      v-for="item in options"
      :key="item.code_categry"
      :label="item.name_categry"
      :value="item.code_categry">
    </el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="保管区域">
    <el-select v-model="form.code_storage" placeholder="请选择保管区域">
    <el-option
      v-for="item in CodeStorage"
      :key="item.code_storage"
      :label="item.name_item_data"
      :value="item.code_storage">
    </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="托盘可载数" >
    <el-input v-model="form.qty" style="widht:40px"></el-input>
  </el-form-item>
  <el-form-item label="QR发行日期" prop="startTime">
    <el-col :span="3">
      <!-- <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker> -->
        <el-date-picker
        v-model="form.startTime"
        value-format="yyyy-MM-dd HH:mm:ss"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']">
        </el-date-picker>
    </el-col>
  </el-form-item>
  <!-- <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit('form')">确认</el-button>
    <!-- <el-button>取消</el-button> -->
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
    
</template>
<script>
  import API from '../../api/api_user'
  import qs from 'qs'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
      }
      return {          
        options: [],
        CodeStorage:[],
        form: {
            code_categry:'',
            code_storage:'',
            startTime:'',
            endTime:'',
            code_pallet:'',
            qty:''
            // name: '',
            // region: '',
            // date1: '',
            // date2: '',
            // delivery: false,
            // type: [],
            // resource: '',
            // desc: ''
        },
        
        rules: {
          // code_pallet: [
          //   { required: true, message: '请输入活动名称', trigger: 'blur' }
          //   // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          startTime: [
            { required: true, message: '请输入QR发行日期', trigger: 'blur' }
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    // 页面初始的时候就加载的
    created() {
      // 物料类别
      API.post('/findInstallJpbpPalletBind/findCodeCategry',JSON.stringify())
        .then((res)=>{
            if(res.code === 20000){    
                this.options = res.data                       
            }else{               
               this.$message.error(res.message);
            }
            console.log(res)
          })
       // 保管区域
      API.post('/findInstallJpbpPalletBind/findCodeStorage',JSON.stringify())
        .then((res)=>{
            if(res.code === 20000){    
                this.CodeStorage = res.data                       
            }else{               
               this.$message.error(res.message);
            }
            console.log(res)
          })
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            API.post('/findInstallJpbpPalletBind/submit',JSON.stringify(this.form))
            .then((res)=>{
                if(res.code === 20000){    
                    this.$message.success(res.message);
                }else{               
                   this.$message.error(res.message);
                }
                console.log(res)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      // 重置
      resetForm(form) {
        this.$refs[form].resetFields();
      }
    }
  }
</script>
<style scoped>
 
</style>