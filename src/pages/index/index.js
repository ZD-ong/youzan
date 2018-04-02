// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'css/common.css'
import './index.css'


import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
// import App from './App'
// import router from './router'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

console.log(axios)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    pageSize: 6,
    loading: false,
    allLoaded: false
  },
  created(){
    this.getLists()
  },
  methods: {
    getLists(){
      if(this.allLoaded) return
      this.loading = true
      axios.post(url.hotLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        //判断所有数据是否加载完毕
        if(curLists.length < this.pageSize){
          this.allLoaded = true
        }
        if(this.lists){
          this.lists = this.lists.concat(curLists)
        }else {
          //第一次请求数据
          this.lists = curLists
        }
        this.loading = false
        this.pageNum++
      })
    }
  }

})
