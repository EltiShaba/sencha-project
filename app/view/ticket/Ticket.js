/**
 * This view is an example of tickets.
 */
Ext.define("MyApp.view.ticket.Ticket", {
  extend: "Ext.grid.Panel",
  xtype: "mainticket",

  controller: "ticket",

  requires: [
    "MyApp.store.Ticket",
    'MyApp.view.ticket.TicketController',
    "Ext.toolbar.Paging",
    "Ext.grid.plugin.CellEditing",
    "Ext.form.field.Date",
    'Ext.grid.plugin.RowEditing'
  ],

  plugins: [
    {
        ptype: 'rowediting',
        clicksToEdit: 2
    }
],

  title: "Ticket",

  store: {
    type: "ticket",
  },

  selModel: {
    selType: 'checkboxmodel'
  },
  
  height: 600,
  width: "100%",

  tbar: [{
    text: 'Add',
    iconCls: 'x-fa fa-plus',
    handler: 'onAddClick',
    bind: {
        hidden: '{!isAdmin}'
    }
}, {
    text: 'Remove',
    iconCls: 'x-fa fa-minus',
    reference: 'btnRemove',
    handler: 'onRemoveClick',
    bind: {
        hidden: '{!isAdmin}',
        disabled: '{!canDelete}'
    }
}],

  columns: [
    { text: "ID", dataIndex: "id", flex: 1 },
    {
      text: "Inbound",
      dataIndex: "inbound",
      flex: 1,
    },
    {
      text: "Outbound",
      dataIndex: "outbound",
      flex: 1,
    },
    {
      text: "Ticket Type",
      dataIndex: "ticket_type",
      editor: "textfield",
      flex: 1,
    },
    {
      text: "Ticket Type ID",
      dataIndex: "ticket_type_id",
      flex: 1,
    //   renderer: function (record) {
    //     console.log("checking the records", record.get("ticket_type"))
    //     return record.get("id") + "-" + record.get("ticket_type");
    //   },
    },
    {
      text: "Price",
      dataIndex: "price",
      xtype: "numbercolumn",
      format: "$0,0.00",
      flex: 1,
      editor: "numberfield",
    },
    {
      text: "From Date",
      dataIndex: "from_date",
      xtype: "datecolumn",
      format: "m/d/Y",
      flex: 1,
    },
    {
      text: "To Date",
      dataIndex: "to_date",
      xtype: "datecolumn",
      format: "m/d/Y",
      flex: 1,
    },
    {
      text: "Seat Number",
      dataIndex: "seat_number",
      editor: "textfield",
      flex: 1,
    }
  ],

  listeners: {
    render: 'onRender',
    selectionchange: 'onSelectionChange'
  },

  dockedItems: [
    {
      xtype: "pagingtoolbar",
      dock: "bottom",
      displayInfo: true,
    },
  ],
});
