import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

import Velocity from 'velocity-animate'

let {keyword, id} = qs.parse(location.search.substr(1))

import mixin from 'js/mixin.js'

new Vue ({
    el: '.container',
    data: {
        searchList: null,
        isShow: false
    },
    created(){
        this.getSeachList()
    },
    methods: {
        getSeachList(){
            axios.post(url.searchList,{keyword,id}).then(res => {
                console.log(res)
                this.searchList = res.data.lists
            })
        },
        move(){
            if(document.body,screenTop > 100){
                this.isShow = true
            }else{
                this.isShow = false
            }
        },
        toTop(){
            Velocity(document.body, 'scroll', {duration: 1000})
        }
    },
    mixins: [mixin]
})