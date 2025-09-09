Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'TestApp': './app' 
    }
});

Ext.application({
    name: 'TestApp',
    
    requires: [
        'TestApp.view.login.Login',
        'TestApp.controllers.LoginController',
        'TestApp.view.main.Main',
        'TestApp.controllers.MainController',
        'TestApp.view.products.ProductsGrid',
        'TestApp.view.products.ProductForm',
        'TestApp.store.Products',
        'TestApp.model.Product'
    ],
    
    launch: function() {
        Ext.create('TestApp.view.login.Login');
    }
});