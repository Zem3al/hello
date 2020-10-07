<template>
  <div id="app">
    <Header :find="find" class="header" />
    <br>
    <br>
    <hr style="height:2px;border-width:1;color:gray;background-color:gray">
    <PictureBox v-if="pictures.length" :pictures="pictures" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PictureBox from "@/components/PictureBox";


// require syntax
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: config.accessKey});
export default {
  name: 'App',
  components: {
    Header,
    PictureBox
  },
  data() {
    return {
      pictures : [],

    }
  },
  methods: {
    find(alt) {
      unsplash.search.photos(alt,1,40)
          .then(toJson)
          .then(json => {
            console.log(json)
            this.pictures = json.results
          });
    },
  },
  mounted : function () {
    unsplash.search.photos("cat",1,40)
        .then(toJson)
        .then(json => {
          this.pictures = json.results
        });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.header {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index:200;  /* high z index so other content scrolls underneath */
  height:100px;     /* define height for content */
}
</style>
