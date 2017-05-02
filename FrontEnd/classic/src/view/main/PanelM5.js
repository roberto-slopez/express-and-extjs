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
                var grid = btn.up('panel').up().down('grid');
                var data = form.getValues();
                if (form.isSelection) {
                    var temp = grid.getStore().getAt(form.currentSelection);
                    data.id = temp.get('id');
                }

                Ext.Ajax.request({
                    url: 'http://localhost:3000/user/current',
                    method: form.isSelection ? 'PUT' : 'POST',
                    jsonData: JSON.stringify({
                        data: data
                    }),
                    success: function (response, opts) {
                        console.log(response);
                    },
                    failure: function (response, opts) {
                    }
                });

                if (form.isSelection) {
                    form.isSelection = false;
                    var record = grid.getStore().getAt(form.currentSelection);
                    Ext.Object.each(form.getValues(), function (key, value) {
                        record.set(key, value);
                    });
                    record.commit();
                } else {
                    grid.getStore().add(data);
                }

                btn.up('form').reset();
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
                    {name: 'first', type: 'string'},
                    {name: 'last', type: 'string'},
                    {name: 'email', type: 'string'},
                    {name: 'phone', type: 'string'},
                    {name: 'id', type: 'string'}
                ],
                proxy: {
                    type: 'ajax',
                    url: 'http://localhost:3000/user/current',
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
