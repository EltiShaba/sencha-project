Ext.define("MyApp.model.Ticket", {
  extend: "MyApp.model.Base",

  fields: [
    { name: "id", type: "int" },
    { name: "ticket_type", type: "string" },
    { name: "ticket_type_id", type: "string" },
    { name: "price", type: "float" },
    { name: "inbound", type: "string" },
    { name: "outbound", type: "string" },
    { name: "from_date", type: "date", dateFormat: "m/d/Y" },
    { name: "to_date", type: "date", dateFormat: "m/d/Y" },
    { name: "seat_number", type: "string" },
  ],

  // define a unique key that's a combination of the 'id' and 'ticket_type' fields

  /*
    TODO: Validation functionality to be checked
  */

  // getTicketKey: function () {
  //   return this.get("id") + "_" + this.get("ticket_type");
  // },
});
