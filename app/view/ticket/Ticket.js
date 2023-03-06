/**
 * This view is an example of tickets.
 */
Ext.define('MyApp.view.ticket.Ticket', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainticket',

  requires: [
      'MyApp.store.Ticket',
      'Ext.toolbar.Paging',
      'Ext.grid.plugin.CellEditing',
      'Ext.form.field.Date',
  ],
  
  title: 'Ticket',
  
  store: {
      type: 'ticket'
  },
  scrollable: {
      x: true,
      y: true
  },    
  height: 600,
  width: '100%',
  columns: [
      { text: 'ID', dataIndex: 'id', flex: 1 },
      { text: 'Inbound', dataIndex: 'inbound', xtype: 'datecolumn', format: 'm/d/Y', flex: 1 },
      { text: 'Outbound', dataIndex: 'outbound', xtype: 'datecolumn', format: 'm/d/Y', flex: 1 },
      { text: 'Ticket Type', dataIndex: 'ticket_type', editor: 'textfield', flex: 1 },
      { text: 'Ticket Type ID', dataIndex: 'ticket_type_id', flex: 1, renderer: function (record) {
          return record.get('id') + '-' + record.get('ticket_type');
      } },
      { text: 'Price', dataIndex: 'price', xtype: 'numbercolumn', format: '$0,0.00', flex: 1, editor: 'numberfield' },
      { text: 'From Date', dataIndex: 'from_date', xtype: 'datecolumn', format: 'm/d/Y', flex: 1 },
      { text: 'To Date', dataIndex: 'to_date', xtype: 'datecolumn', format: 'm/d/Y', flex: 1 },
      { text: 'Seat Number', dataIndex: 'seat_number', editor: 'textfield', flex: 1 },
      { text: '', xtype: 'widgetcolumn', width: 50, widget: {
          xtype: 'button',
          iconCls: 'x-fa fa-trash',
          handler: function (button) {
              var record = button.getWidgetRecord();
              record.drop();
          }
      } }
  ],

  dockedItems: [{
    xtype: 'pagingtoolbar',
    dock: 'bottom',
    displayInfo: true
  }]
});
