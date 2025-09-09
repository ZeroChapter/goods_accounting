Ext.define('TestApp.view.products.ProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'product-form',
    cls: 'custom-window fade-in', 
    title: 'Редактирование товара',
    width: 400,
    height: 400,
    layout: 'fit',
    modal: true,

    items: [{
        xtype: 'form',
        itemId: 'productForm',
        bodyPadding: 10,
        defaults: {
            anchor: '100%',
            labelWidth: 100
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id',
            fieldStyle: 'color: #2c3e50; font-weight: 500;' 
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Название',
            name: 'name',
            fieldStyle: 'color: #2c3e50; font-weight: 500;' 
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Описание',
            name: 'description',
            fieldStyle: 'color: #2c3e50;' 
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Цена',
            name: 'price',
            minValue: 0,
            decimalPrecision: 2,
            allowBlank: false
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Количество',
            name: 'quantity',
            minValue: 0,
            allowDecimals: false,
            allowBlank: false
        }]
    }],

    buttons: [{
        text: 'Отмена',
        cls: 'custom-button', 
        handler: function() {
            this.up('window').close();
        }
    }, {
        text: 'Сохранить',
        formBind: true,
        cls: 'custom-button', 
        handler: function() {
            const form = this.up('window').down('#productForm');
            const values = form.getValues();
            const record = this.up('window').record;
            
            
            let changes = false;
            let changedFields = [];
            
            if (record.get('price') != parseFloat(values.price)) {
                changes = true;
                changedFields.push('цену');
            }
            
            if (record.get('quantity') != parseInt(values.quantity)) {
                changes = true;
                changedFields.push('количество');
            }
            
            if (changes) {
                Ext.Msg.confirm('Сохранение', 'Были изменены: ' + changedFields.join(', ') + '. Сохранить изменения?', function(btn) {
                    if (btn === 'yes') {
                        record.set('price', parseFloat(values.price));
                        record.set('quantity', parseInt(values.quantity));
                        record.commit();
                        this.up('window').close();
                    }
                }, this);
            } else {
                this.up('window').close();
            }
        }
    }],

    initComponent: function() {
        this.callParent(arguments);
        
        
        var form = this.down('#productForm');
        if (this.record && form) {
            form.loadRecord(this.record);
        }
    }
});