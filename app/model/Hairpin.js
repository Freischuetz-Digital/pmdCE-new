Ext.define('pmdCE.model.Hairpin', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',   reference: 'pmdCE.model.Hairpins'},
        {name: 'staff',   type: 'string'},
        {name: 'tstamp',   type: 'string'},
        {name: 'tstamp2',   type: 'string'},
        {name: 'place',   type: 'string'},
        {name: 'form',   type: 'string'},
        {name: 'placement',   type: 'string'}
    ]
});