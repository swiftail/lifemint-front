let sample = require('lodash.sample');

export default {
  logo: {
    src: require('~/assets/images/logo.png'),
    webp: require('~/assets/images/logo.png?webp'),
    placeholder: require('~/assets/images/logo.png?lqip')
  },

  masthead: [
    {
      src: require('~/assets/images/masthead/1.png?resize&sizes[]=400&sizes[]=600&sizes[]=1000&sizes[]=1366'),
      webp: require('~/assets/images/masthead/1.png?resize&sizes[]=400&sizes[]=600&sizes[]=1000&sizes[]=1366&format=webp'),
      fallback: require('~/assets/images/masthead/1.png'),
      placeholder: require('~/assets/images/masthead/1.png?lqip')
    }
  ],

  randomMastheadImage() {
    return sample(this.masthead)
  },

  consultation: {
    src: require('~/assets/images/consultation.png?resize&sizes[]=400&sizes[]=600&sizes[]=866&sizes[]=1160'),
    webp: require('~/assets/images/consultation.png?resize&sizes[]=400&sizes[]=600&sizes[]=866&sizes[]=1160&format=webp'),
    fallback: require('~/assets/images/consultation.png'),
    placeholder: require('~/assets/images/consultation.png?lqip')
  },
  placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP89R8AAvkB+0p/ESEAAAAASUVORK5CYII='
}
