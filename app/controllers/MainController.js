Ext.define('TestApp.controllers.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onProductsClick: function() {
        const tabPanel = this.lookupReference('mainTabPanel');
        const tabCount = tabPanel.items.length + 1;

        const newTab = tabPanel.add({
            title: 'Товары ' + tabCount,
            closable: true,
            layout: 'fit',
            items: [{
                xtype: 'products-grid' 
            }]
        });

        tabPanel.setActiveTab(newTab);
    }
});