// onekit/ui/checkbox-group/checkbox-group.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    name:{type:String,value:''}
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
    checkboxGroup_change(e){
      this.triggerEvent("Change",e)
    }
  }
})