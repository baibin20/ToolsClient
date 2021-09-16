module.exports = {
    presets: [
      '@vue/app'
    ],
    plugins:[
        [
            "import",
            {
                "libraryName": "vant",
                "libraryDirectory": "es",
                "style": true
              }
        ],
        [
            "import",
            {
                "libraryName": "we-vue",
                "style": "style.css"
              },
              "we-vue"
        ]
    ]
  }