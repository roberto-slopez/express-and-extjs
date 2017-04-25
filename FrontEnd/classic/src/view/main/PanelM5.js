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
            handler: function(btn) {
                var values = btn.up('form').getValues();
                btn.up('form').reset();
                var grid = btn.up('panel').up().down('grid');
                grid.getStore().add(values);
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
        },{
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
            store: Ext.create('M5.store.Usuario', {
                extend: 'Ext.data.Store',
                storeId: 'usuarios',
                model: 'M5.model.User',
                data: [
                    { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
                    { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
                    { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
                    { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
                ]
            }),
            columns: [
                { text: 'Name', dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1 },
                { text: 'Phone', dataIndex: 'phone' }
            ]
        }]
    }]
});