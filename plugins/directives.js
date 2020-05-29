import Vue from 'vue'

Vue.directive('click-outside', {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // check that click was outside of el and its children
      if (!(el == event.target || el.contains(event.target))) {
        // call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});