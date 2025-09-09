Ext.define('TestApp.view.products.ProductsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'products-grid',
    cls: 'custom-grid fade-in', 

    requires: [
        'TestApp.store.Products',
        'TestApp.view.products.ProductForm'
    ],

    title: 'Список товаров',
    padding: 10,

    store: {
        type: 'products'
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 50
    }, {
        text: 'Имя',
        dataIndex: 'name',
        flex: 1,
        renderer: function(value, meta, record) {
            return '<a href="#" style="color: #3498db; text-decoration: underline; font-weight: 500;" onclick="Ext.ComponentQuery.query(\'products-grid\')[0].onNameClick(' + record.getId() + '); return false;">' + value + '</a>';
        }
    }, {
        text: 'Описание',
        dataIndex: 'description',
        flex: 2
    }, {
        text: 'Цена',
        dataIndex: 'price',
        width: 80,
        renderer: function(value) {
            return value + ' ₽';
        }
    }, {
        text: 'Кол-во',
        dataIndex: 'quantity',
        width: 80,
        renderer: function(value, meta) {
            if (value === 0) {
                meta.tdCls = 'quantity-zero';
            }
            return value;
        }
    }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        cls: 'custom-toolbar', 
        itemId: 'filterToolbar',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'ID товара',
            itemId: 'idFilter',
            enableKeyEvents: true,
            width: 200,
            margin: '0 10 0 0',
            listeners: {
                keypress: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        var grid = field.up('products-grid');
                        grid.applyFilters();
                    }
                }
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Описание',
            itemId: 'descFilter',
            enableKeyEvents: true,
            width: 300,
            margin: '0 10 0 0',
            listeners: {
                keypress: function(field, e) {
                    if (e.getKey() === e.ENTER) {
                        var grid = field.up('products-grid');
                        grid.applyFilters();
                    }
                }
            }
        }, {
            xtype: 'button',
            text: 'Сбросить',
            cls: 'custom-button', 
            handler: function(btn) {
                var grid = btn.up('products-grid');
                grid.resetFilters();
            }
        }]
    }],

  
    onNameClick: function(productId) {
        const store = this.getStore();
        const record = store.getById(productId);
        
        if (record) {
            this.openProductForm(record);
        }
    },

    applyFilters: function() {
        var idField = this.down('#idFilter');
        var descField = this.down('#descFilter');
        
        var idValue = idField.getValue();
        var descValue = descField.getValue();
        var store = this.getStore();

        store.clearFilter();

        if (idValue || descValue) {
            store.filter([{
                filterFn: function(item) {
                    var idMatch = true;
                    var descMatch = true;

                    if (idValue) {
                        idMatch = item.get('id') == parseInt(idValue);
                    }

                    if (descValue) {
                        descMatch = item.get('description').toLowerCase().includes(descValue.toLowerCase());
                    }

                    return idMatch && descMatch;
                }
            }]);
        }
    },

    resetFilters: function() {
        this.down('#idFilter').setValue('');
        this.down('#descFilter').setValue('');
        this.getStore().clearFilter();
    },

    openProductForm: function(record) {
        var form = Ext.create('TestApp.view.products.ProductForm', {
            record: record
        });
        form.show();
    }
});