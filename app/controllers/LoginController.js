Ext.define('TestApp.controllers.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        const form = this.lookupReference('form');
        const values = form.getValues();

        if (values.username === 'admin' && values.password === 'padmin') {
            console.log('Вход успешен!');
            form.reset();
            
            this.getView().destroy();
            
            
            Ext.create('TestApp.view.main.Main', {
                renderTo: Ext.getBody(), 
                width: '100%',
                height: '100%'
            });
            
            
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
            form.reset();
        }
    }
});