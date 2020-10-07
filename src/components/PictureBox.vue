<template>
  <div>
  <head>
    <title>Font Awesome Icons</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <div>
    <div>
      <div class="row ">
        <div class="col-3" style="left: 14%">
          <div v-for="picture in split.col1" :key="picture.id">
            <div class="container" @dblclick="picture.liked_by_user=!picture.liked_by_user">
              <img :src="picture.urls.regular" class="image"  >
              <div class="overlay">
                <div class="hover-header">
                    <i class="fa fa-heart" style="font-size:30px; position: absolute; left: 80%;top: 10px" @click="picture.liked_by_user=!picture.liked_by_user" :style="[picture.liked_by_user? {'color':`red`}:{'color':`black`}]" ></i>
                </div>
                <div class="overlay-bottom" style="bottom: 20px;position: absolute; left: 8% ">
                    <div class="profile">
                      <a :href="picture.user.links.html" >
                      <img :src="picture.user.profile_image.medium">
                      </a>
                      <a :href="picture.user.links.html" >
                      <div class="username" :style="[picture.user.name.length>5? {'bottom':'20px'}:{'bottom':'50px'}]">
                        {{picture.user.name}}
                      </div>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3" style="left: 13%">
          <div v-for="picture in split.col2" :key="picture.id">
            <div class="container" @dblclick="picture.liked_by_user=!picture.liked_by_user">
              <img :src="picture.urls.regular" class="image" @click="changeDisplay(picture)" @dblclick="picture.liked_by_user=!picture.liked_by_user">
              <div class="overlay">
                <div class="hover-header">
                  <i class="fa fa-heart" style="font-size:30px; position: absolute; left: 80%;top: 10px" @click="picture.liked_by_user=!picture.liked_by_user" :style="[picture.liked_by_user? {'color':`red`}:{'color':`black`}]" ></i>
                </div>
                <div class="overlay-bottom" style="bottom: 20px;position: absolute; left: 8% ">
                  <div class="profile">
                    <a :href="picture.user.links.html" >
                      <img :src="picture.user.profile_image.medium">
                    </a>
                    <a href="picture.user.links.html">
                      <div class="username" :style="[picture.user.name.length>5? {'bottom':'20px'}:{'bottom':'50px'}]">
                        {{picture.user.name}}
                      </div>
                    </a>
                    <a href="picture.links.download" >
                    <i class="fas fa-download" style="bottom:50px;position: absolute;right: 30%;font-size:30px"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3" style="left: 12%">
          <div v-for="picture in split.col3" :key="picture.id">
            <div class="container" @dblclick="picture.liked_by_user=!picture.liked_by_user">
              <img :src="picture.urls.regular" class="image" @click="changeDisplay(picture)" @dblclick="picture.liked_by_user=!picture.liked_by_user">
              <div class="overlay">
                <div class="hover-header">
                  <i class="fa fa-heart" style="font-size:30px; position: absolute; left: 80%;top: 10px" @click="picture.liked_by_user=!picture.liked_by_user" :style="[picture.liked_by_user? {'color':`red`}:{'color':`black`}]" ></i>
                </div>
                <div class="overlay-bottom" style="bottom: 20px;position: absolute; left: 8% ">
                  <div class="profile">
                    <a :href="picture.user.links.html" >
                      <img :src="picture.user.profile_image.medium">
                    </a>
                    <a :href="picture.user.links.html" >
                      <div class="username" :style="[picture.user.name.length>5? {'bottom':'20px'}:{'bottom':'50px'}]">
                        {{picture.user.name}}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "PictureBox",
  props: {
    pictures: Array
  },
  data: function () {
    return {
      liked : false,
      model: {
        hidden: false,
        picture: {}
      }
    }
  },
  computed: {
    split() {
      let pics = {
        col1: [],
        col2: [],
        col3: [],
      }
      this.pictures.forEach(function (value, index) {
        switch (index % 3) {
          case 1:
            pics.col1.push(value)
            break;
          case 2:
            pics.col2.push(value)
            break;
          case 0:
            pics.col3.push(value)
            break;
        }
      })
      return pics
    }
  },
  methods: {
    changeDisplay(picture) {
      this.model.hidden = !this.model.hidden
      this.model.picture = picture
    },
  },
}
</script>

<style scoped>
img {
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  object-fit: fill;
}

.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  opacity: 1;
}
.username{
  color: white;
  font-size: 24px;
  position: absolute;
  left: 80px;
}


</style>