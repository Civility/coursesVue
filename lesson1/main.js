Vue.filter('uppercase', function (value) { 
    return  value.toUpperCase() ;
});
// 1 букву в верхний регистр
// Vue.filter('capitalize', function (value) { 
//           var capitalFirst = value.charAt(0).toUpperCase() 
//           var noCaseTail = value.slice(1, value.length) 
//             return capitalFirst + noCaseTail;
// });

Vue.directive("changestyle",{
   bind(e1,binding, vnode) {
      e1.style.color = "red";
      e1.style.fontSize = "30px";
   }
});
var app = new Vue({
    el: '#app',
    data: function () {
        return {
            uppercaseButton : false,
            visible: true,
            noImg: './img/no_img.jpg',
            users: [
                {firstName: 'One', lastName: 'lastOnes', middleName: 'middlOne', img: 'http://placekitten.com/g/91/91'},
                {firstName: 'Two', lastName: 'lastTwo', middleName: 'middlTwo', img: 'http://placekitten.com/g/90/90'},
                {firstName: 'Three', lastName: 'lastThree', middleName: 'middlThree', img: 'http://placekitten.com/g/92/92'},
                {firstName: 'Four', lastName: 'lastFour', middleName: 'middlFour', img: ''},
                {firstName: 'Five', lastName: 'lastFive', middleName: 'middlFive', img: 'http://placekitten.com/g/93/93'}
            ]
        }
    },
    methods: {
        total() {
            return this.users.length;
        }
    }
})