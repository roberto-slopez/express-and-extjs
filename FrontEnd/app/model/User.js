Ext.define('M5.model.User', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'first', type: 'string' },
        { name: 'last', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string', convert: function (value) {
            //return `(502)-${value}`;
            return Ext.String.format('(502)-{0}', value);
        } }

    ]
});
