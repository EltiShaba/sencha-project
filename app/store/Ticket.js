Ext.define("MyApp.store.Ticket", {
  extend: "Ext.data.Store",
  alias: "store.ticket",
  model: "MyApp.model.Ticket",
  pageSize: 100, // set the number of rows per page
  remoteFilter: true, // enable server-side filtering
  proxy: {
    type: 'rest',
    url: 'https://sencha-js-default-rtdb.europe-west1.firebasedatabase.app/tickets.json', //url of database in Firebase
    writer: {
      type: 'json',
      writeAllFields: true
    },
    reader: {
      type: 'json',
      rootProperty: 'tickets'// the field that holds all the data
    },
    api: {
      create: 'https://sencha-js-default-rtdb.europe-west1.firebasedatabase.app/tickets.json',
      read: 'https://sencha-js-default-rtdb.europe-west1.firebasedatabase.app/tickets.json',
      update: 'https://sencha-js-default-rtdb.europe-west1.firebasedatabase.app/tickets.json',
      destroy: 'https://sencha-js-default-rtdb.europe-west1.firebasedatabase.app/tickets.json'
    },  
    listeners: {
      exception: function(proxy, response, operation) {
        Ext.MessageBox.show({
          title: 'REMOTE EXCEPTION',
          msg: operation.getError(),
          icon: Ext.MessageBox.ERROR,
          buttons: Ext.Msg.OK
        });
      }
    }
  },
  autoLoad: true,
  autosync: true,
  filters: [
    {
      property: 'Role',
      value: 'admin'
    }
  ],
  listeners: {
    load: function(store, records, successful, operation, eOpts) {
      if (successful) {
        var pageSize = store.getPageSize();//returns 100 rows
        var start = (store.currentPage - 1) * pageSize;//starting index of the records for the current page by multiplying the current page number        var end = start + pageSize;
        var end = start + pageSize;
        store.removeAll();//removeAll method is called on the store to remove all of the initially loaded records
        store.add(records.slice(start, end));//add method is called to add only the first page of records to the store
      }
    }
  }
});
