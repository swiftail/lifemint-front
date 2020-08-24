import Vue from "vue"

if (process.client) {
  Vue.prototype.$showAppointment = function (data) {
    window.AppointmentModal.setData(data || {});
    window.modals['appointment-modal'].show()
  }
}
