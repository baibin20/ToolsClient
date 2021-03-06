import Vue from 'vue'
import Router from 'vue-router'
import TopNav from '@/components/nav/topNav.vue'
import LeftNav from '@/components/nav/leftNav.vue'
import Home from '@/views/home.vue'
import Dashboard from '@/views/workbench/dashboard.vue'
import MySettings from '@/views/workbench/mySettings.vue'
import Plan from '@/views/workbench/plan/plan.vue'
import Maillist from '@/views/workbench/maillist.vue'
import EnterpriseList from '@/views/enterprise/index.vue'
import EnterpriseAdd from '@/views/enterprise/add.vue'
import EnterpriseDetail from '@/views/enterprise/detail.vue'
import EnterpriseValidate from '@/views/enterprise/validate.vue'
import VehicleManage from '@/views/vehicle/index.vue'
import DeptManager from '@/views/dept/index.vue'
import NotFound from '@/components/404.vue'
import Register from '@/views/register'
import RetrievePwd from '@/views/retrievePwd'
import automatic from '@/views/jobpalletbind/automatic.vue'
import manual from '@/views/jobpalletbind/manual.vue'
import explanation from '@/views/jobpalletbind/explanation'
// 懒加载方式，当路由被访问的时候才加载对应组件
const Login = resolve => require(['@/views/login'], resolve)
// const Register = resolve => require(['@/views/register'], resolve)

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      type: 'login',
      component: Login
    },
    {
      path: '/register',
      type: 'register',
      component: Register
    },
    {
      path: '/retrievePwd',
      type: 'retrievePwd',
      component: RetrievePwd
    },
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      type: 'home',
      name: 'home',
      redirect: '/dashboard',
      component: Home,
      children: [
        {
          path: '/dashboard',
          name: '首页',
          components: {
            default: Dashboard,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
        {
          path: '/mySet',
          components: {
            default: MySettings,
            top: TopNav,
            aside: LeftNav
          },
          name: '我的设置',
          iconCls: 'el-icon-menu',
          menuShow: true,
          children: [
            { path: '/mySet/plan', component: Plan, name: '备忘录', menuShow: true },
            // { path: '/mySet/mission', component: Mission, name: '通讯录', menuShow: true },
            { path: '/mySet/maillist', component: Maillist, name: '密码修改', menuShow: true }
          ]
        }
      ]
    },
    {
      path: '/enterpriseManager',
      type: 'enterprise',
      name: 'enterprise',
      component: Home,
      redirect: '/enterprise/list',
      menuShow: true,
      children: [
        {
          path: '/enterprise/list',
          name: '前台表示',
          components: {
            default: EnterpriseList,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/enterprise/detail',
          name: '企业详情',
          components: {
            default: EnterpriseDetail,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: false
        },
        {
          path: '/enterprise/add',
          name: '后台设定',
          components: {
            default: EnterpriseAdd,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/enterprise/validate',
          name: '操做说明',
          components: {
            default: EnterpriseValidate,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    },
    {
      path: '/enterpriseManager',
      type: 'enterprise',
      name: 'enterprise',
      component: Home,
      redirect: '/enterprise/list',
      menuShow: true,
      children: [
        {
          path: '/enterprise/list',
          name: '前台表示',
          components: {
            default: EnterpriseList,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: true
        },
        {
          path: '/enterprise/detail',
          name: '企业详情',
          components: {
            default: EnterpriseDetail,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-setting',
          menuShow: false
        },
        {
          path: '/enterprise/add',
          name: '后台设定',
          components: {
            default: EnterpriseAdd,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },
        {
          path: '/enterprise/validate',
          name: '操做说明',
          components: {
            default: EnterpriseValidate,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    },
    // WMS组盘表
    {
      path: '/jobPalletbind',
      type: 'jobpalletbind',
      name: 'jobpalletbind',
      component: Home,
      redirect: '/jobpalletbind/automatic',
      menuShow: true,
      children: [
        {
          path: '/jobpalletbind/automatic',
          name: '自动组盘',
          components: {
            default: automatic,
            top: TopNav,
            aside:  LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
        {
          path: '/jobpalletbind/manual',
          name: '手动组盘',
          components: {
            default: manual,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        },{
          path: '/jobpalletbind/explanation',
          name: '操做说明',
          components: {
            default: explanation,
            top: TopNav,
            aside: LeftNav
          },
          leaf: true,
          iconCls: 'el-icon-menu',
          menuShow: true
        }
      ]
    },
    
    {
      path: '/deptManager',
      type: 'enterprise',
      name: 'dept',
      component: Home,
      redirect: '/dept/list',
      menuShow: true,
      children: [
        {
          path: '/dept/list',
          name: '前台显示',
          components: {
            default: DeptManager,
            top: TopNav,
            aside:  LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },{
          path: '/dept/list1',
          name: '后台设定',
          components: {
            default: DeptManager,
            top: TopNav,
            aside:  LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },{
          path: '/dept/list2',
          name: '操做说明',
          components: {
            default: DeptManager,
            top: TopNav,
            aside:  LeftNav
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      // next({path: '/login'})
      next()
    } else {
      next()
    }
  }
});

export default router
