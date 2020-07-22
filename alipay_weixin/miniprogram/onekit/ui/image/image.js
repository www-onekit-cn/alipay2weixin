// onekit/ui/image/image.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
      src: {
        type:String,
        value:'',
      },
      mode: {
        type:String,
        value:'scaleToFill',
      },
      lazyLoad: {
        type:Boolean ,
        value:false,
      },
},
  methods: {
    image_error(e){
      this.triggerEvent('error',{})
  },
  image_load(e){
    this.triggerEvent('load',{})
},


  }
})
