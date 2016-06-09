(function () {
    'use strict';

    angular.module('main', [])
        .controller('MainController', MainController);

    MainController.$inject = [];
    function MainController() {

        var vm = this;
        //vm.email = '';
        //vm.nombre = '';
        //vm.mensaje = '';
        //vm.asunto = '';
        //vm.enviado = false;
        //vm.enviando = false;
        //vm.sendMail = sendMail;
        //
        //function sendMail() {
        //    if (vm.enviando) {
        //        return;
        //    }
        //    vm.enviando = true;
        //
        //    ContactsService.sendMail(vm.email,
        //        [{mail: 'arielcessario@gmail.com'}],
        //        vm.nombre,
        //        vm.mensaje,
        //        vm.asunto,
        //        function (data, result) {
        //            vm.enviando = false;
        //            console.log(data);
        //            console.log(result);
        //
        //            vm.email = '';
        //            vm.nombre = '';
        //            vm.asunto = '';
        //            vm.mensaje = '';
        //
        //        });
        //}


    }
})();