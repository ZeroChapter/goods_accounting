Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'TestApp.controllers.MainController',
        'TestApp.view.products.ProductsGrid'
    ],

    controller: 'main',
    layout: 'border',
    cls: 'fade-in', 
    
    width: '100%',
    height: '100%',
    renderTo: Ext.getBody(),
    
    style: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0'
    },

    items: [{
        region: 'north',
        height: 50,
        html: '<h1 style="padding: 10px; margin: 0; color: black; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">Учет товаров</h1>',
        border: false,
        style: {
            background: 'linear-gradient(to right, #2c3e50, #3498db)',
            borderBottom: '2px solid #1a2530'
        }
    }, {
        region: 'west',
        width: 200,
        bodyPadding: 10,
        style: {
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid #ddd'
        },
        items: [{
            xtype: 'button',
            text: 'Товары',
            iconCls: 'x-fa fa-cube',
            cls: 'custom-button', 
            height: 40,
            margin: '0 0 10 0',
            listeners: {
                click: 'onProductsClick'
            }
        }, {
            xtype: 'button',
            text: 'Выход',
            iconCls: 'x-fa fa-sign-out',
            cls: 'custom-button', 
            height: 40,
            handler: function() {
                window.location.reload();
            }
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        reference: 'mainTabPanel',
        items: [{
            title: 'Добро пожаловать',
            html: '<div style="padding: 20px;"><h2 style="color: #2c3e50;">Главное окно</h2><p style="color: #555;">Нажмите "Товары" чтобы открыть новую вкладку.</p></div>'
        }]
    }]
});