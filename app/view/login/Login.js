Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-dialog',

    requires: [
        'TestApp.controllers.LoginController'
    ],

    controller: 'login',
    autoShow: true,
    closable: false,
    resizable: false,
    title: 'Вход в систему',
    bodyPadding: 10,
    width: 300,
    cls: 'custom-window fade-in', 

    items: [{
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Логин',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Пароль',
            allowBlank: false
        }]
    }],

    buttons: [{
        text: 'Вход',
        formBind: true,
        cls: 'custom-button', 
        listeners: {
            click: 'onLoginClick'
        }
    }]
});