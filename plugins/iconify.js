import Vue from "vue"
import IconifyIcon from '@iconify/vue';

import bxMenu from "@iconify/icons-bx/bx-menu"
import bxArrowRightAlt from "@iconify/icons-bx/bx-right-arrow-alt"
import bxArrowUpAlt from "@iconify/icons-bx/bx-up-arrow-alt"

import bxArrowRight from "@iconify/icons-bx/bxs-chevron-right"
import bxArrowLeft from "@iconify/icons-bx/bxs-chevron-left"

import bxColorFill from "@iconify/icons-bx/bxs-color-fill"
import bxText from "@iconify/icons-bx/bx-text"
import bxImage from "@iconify/icons-bx/bx-image"
import bxRefresh from "@iconify/icons-bx/bx-refresh"

import bxVk from "@iconify/icons-bx/bxl-vk"
import bxInstagram from "@iconify/icons-bx/bxl-instagram"
import bxFacebook from "@iconify/icons-bx/bxl-facebook"
import bxWeb from "@iconify/icons-bx/bx-globe"

import bxMap from "@iconify/icons-bx/bx-map"
import bxPhone from "@iconify/icons-bx/bx-phone"

import bxX from "@iconify/icons-bx/bx-x"

IconifyIcon.addIcon('menu', bxMenu)
IconifyIcon.addIcon('arrow-right', bxArrowRightAlt)
IconifyIcon.addIcon('arrow-up', bxArrowUpAlt)

IconifyIcon.addIcon('a11y-contrast', bxColorFill)
IconifyIcon.addIcon('a11y-text', bxText)
IconifyIcon.addIcon('a11y-image', bxImage)
IconifyIcon.addIcon('a11y-refresh', bxRefresh)

IconifyIcon.addIcon('sm-vk', bxVk)
IconifyIcon.addIcon('sm-instagram', bxInstagram)
IconifyIcon.addIcon('sm-facebook', bxFacebook)
IconifyIcon.addIcon('sm-web', bxWeb)

IconifyIcon.addIcon('slider-next', bxArrowRight)
IconifyIcon.addIcon('slider-prev', bxArrowLeft)

IconifyIcon.addIcon('contacts-map', bxMap)
IconifyIcon.addIcon('contacts-phone', bxPhone)

IconifyIcon.addIcon('modal-close', bxX)

Vue.component('iconify-icon', IconifyIcon)
