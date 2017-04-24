Ext.define('M5.view.main.Fit', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.Fit'
    ],

    xtype: 'layout-fit',

    layout: 'fit',
    width: 500,
    height: 400,

    bodyPadding: 25,

    items: {
        title: 'Inner Panel',
        html: '<p>This panel is fit within its container.</p>',
        bodyPadding: 15,
        border: true
    }

});
