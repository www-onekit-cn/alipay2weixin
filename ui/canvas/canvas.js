// onekit/ui/canvas/canvas.js
Component({
  options: {
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    width: { type: String,
      value:"300px" },
    height: { type: String,
      value:"225px" },
    'onekit-id': {
      type:String,
      value:""
    },
    disableScroll: {
      type:Boolean,
      value:false
    },

  },
lifetimes:{
  attached(){
  //  console.log("id",this.id)
  }
},
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})