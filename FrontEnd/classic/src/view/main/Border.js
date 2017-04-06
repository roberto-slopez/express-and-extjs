/**
 * Demonstrates usage of a border layout.
 */
Ext.define('M5.view.main.Border', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',
    requires: [
        'Ext.layout.container.Border'
    ],
    layout: 'border',
    width: '100%',
    height: 500,

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 5
    },

    items: [
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            items: [{
                xtype: 'layout-fit'
            }]
        },
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>Secondary content like navigation links could go here</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            items: [{
                xtype: 'mainlist'
            }]
        }
    ]

});
