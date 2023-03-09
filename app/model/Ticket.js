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

  validators: {
    fieldValidation: function (value) {
      var store = Ext.getStore("ticket");
      var isDuplicate = false;

      store.each(function (rec) {
        if (
          rec.get("inbound") === value.inbound &&
          rec.get("outbound") === value.outbound &&
          rec.get("from_date").getTime() === value.from_date.getTime() &&
          rec.get("to_date").getTime() === value.to_date.getTime() &&
          rec.get("seat_number") === value.seat_number &&
          rec !== value.record
        ) {
          isDuplicate = true;
          return false; // break out of each loop
        }
      });

      if (isDuplicate) {
        return "Duplicate record";
      }

      return true;
    },
  },
});
