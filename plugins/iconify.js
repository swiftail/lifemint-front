import Vue from "vue"
import IconifyIcon from '@iconify/vue';

import bxMenu from "@iconify/icons-bx/bx-menu"
import bxArrowRight from "@iconify/icons-bx/bx-right-arrow-alt"

import bxColorFill from "@iconify/icons-bx/bxs-color-fill"
import bxText from "@iconify/icons-bx/bx-text"
import bxImage from "@iconify/icons-bx/bx-image"
import bxRefresh from "@iconify/icons-bx/bx-refresh"

import bxVk from "@iconify/icons-bx/bxl-vk"
import bxInstagram from "@iconify/icons-bx/bxl-instagram"
import bxFacebook from "@iconify/icons-bx/bxl-facebook"

IconifyIcon.addIcon('menu', bxMenu)
IconifyIcon.addIcon('arrow-right', bxArrowRight)

IconifyIcon.addIcon('a11y-contrast', bxColorFill)
IconifyIcon.addIcon('a11y-text', bxText)
IconifyIcon.addIcon('a11y-image', bxImage)
IconifyIcon.addIcon('a11y-refresh', bxRefresh)

IconifyIcon.addIcon('sm-vk', bxVk)
IconifyIcon.addIcon('sm-instagram', bxInstagram)
IconifyIcon.addIcon('sm-facebook', bxFacebook)

Vue.component('iconify-icon', IconifyIcon)