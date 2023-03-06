Ext.define("MyApp.model.Ticket", {
  extend: "MyApp.model.Base",

  // fields: [
  //    'id', 'ticket_type', 'ticket_type_id', 'price', 'inbound', 'outbound', 'from_date', 'to_date', 'seat_number'
  // ]

  // validators: {
  //     unique: [
  //         { type: 'uniqueness', field: ['inbound', 'outbound', 'from_date', 'to_date', 'seat_number'] }
  //     ]
  // }

//   idProperty: "ticket_key", // specify the unique key field
//   identifier: "sequential", // use a sequential ID generator for new records
  fields: [
    { name: "id", type: "int" },
    { name: "ticket_type", type: "string" },
    { name: "ticket_type_id", type: "string" },
    { name: "price", type: "float" },
    { name: "inbound", type: "string" },
    { name: "outbound", type: "string" },
    { name: "from_date", type: "date", dateFormat: "Y-m-d" },
    { name: "to_date", type: "date", dateFormat: "Y-m-d" },
    { name: "seat_number", type: "string" },
  ],

  // define a unique key that's a combination of the 'id' and 'ticket_type' fields
  getTicketKey: function () {
    return this.get("id") + "_" + this.get("ticket_type");
  },
});
