/**
 * Created by esanchez on 24/04/2017.
 */
Ext.define('M5.view.main.PanelM5', {
    extend: 'Ext.panel.Panel',
    xtype: 'panelm5',
    width: 500,
    height: 400,
    defaults: {
        margin: 10
    },
    bodyCls: "redcolor",
    items: [{
        title: 'Formulario',

        tbar: [{
            text: "Guardar"
        }, {
            text: "Cancelar"
        }],
        border: 1,
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
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email'  // requires value to be a valid email address format
        }, {
            xtype: 'datefield',
            anchor: '100%',
            fieldLabel: 'From',
            name: 'from_date',
            maxValue: new Date()  // limited to the current date or prior
        }, {
            xtype: 'numberfield',
            anchor: '100%',
            allowExponential: false,
            name: 'bottles',
            fieldLabel: 'Bottles of Beer',
            value: 99,
            maxValue: 99,
            minValue: 0
        }]

    }, {
        title: 'Panel',
        xtype: 'panel'
    }]
});