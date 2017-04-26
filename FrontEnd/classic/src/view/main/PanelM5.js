/**
 * Created by esanchez on 24/04/2017.
 */
Ext.define('M5.view.main.PanelM5', {
    extend: 'Ext.panel.Panel',
    xtype: 'panelm5',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1,
        margin: 10
    },

    bodyCls: "redcolor",
    items: [{
        title: 'Formulario',

        tbar: [{
            text: "Guardar",
            handler: function (btn) {
                var form = btn.up('form');
                btn.up('form').reset();
                var grid = btn.up('panel').up().down('grid');
                if (form.isSelection) {
                    form.isSelection = false;
                    var record = grid.getStore().getAt(form.currentSelection);
                    Ext.Object.each(from.getValues(), function(key, value) {
                        record.set(key, value);
                    });
                    record.commit();
                    //record.beginEdit();
                    //endEdit ( [silent] , [modifiedFieldNames] )
                    //record.endEdit();
                } else {
                    grid.getStore().add(form.getValues());
                }
            }
        }, {
            text: "Cancelar",
            handler: function (btn) {
                btn.up('form').reset();
            }
        }],
        border: true,
        bodyPadding: 10,
        xtype: 'form',
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank: false
        }, {
            fieldLabel: 'Last Name',
            name: 'last',
            allowBlank: false
        }, {
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email'  // requires value to be a valid email address format
        }, {
            anchor: '100%',
            name: 'phone',
            fieldLabel: 'Phone'
        }]

    }, {
        title: 'Panel',
        xtype: 'panel',
        border: true,
        refenrence: 'griduser',
        items: [{
            xtype: 'grid',
            store: new Ext.data.Store({
                autoLoad: true,
                storeId: 'usuarios',
                fields: [
                    { name: 'first', type: 'string' },
                    { name: 'last', type: 'string' },
                    { name: 'email', type: 'string' },
                    { name: 'phone', type: 'string' }

                ],
                proxy: {
                    type: 'ajax',
                    url: 'http://localhost:3000/user/current',
                    actionMethods: {
                        create: 'POST',
                        read: 'POST',
                        update: 'POST',
                        destroy: 'POST'
                    },
                    paramsAsJson: true,
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                }
            }),
            columns: [
                {text: 'First Name', dataIndex: 'first'},
                {text: 'Last Name', dataIndex: 'last'},
                {text: 'Email', dataIndex: 'email', flex: 1},
                {text: 'Phone', dataIndex: 'phone'}
            ],
            listeners: {
                cellclick: function (grid, td, cellIndex, record, tr, rowIndex) {
                    var form = grid.up().up().up().down("form");
                    form.isSelection = true;
                    form.currentSelection = rowIndex;
                    form.getForm().setValues(record.getData());
                }
            }
        }]
    }]
});
