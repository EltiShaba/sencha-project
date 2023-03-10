Ext.define("MyApp.view.chart.ChartView", {
  extend: "Ext.Panel",
  xtype: "chartview",

  width: 650,

  initComponent: function () {
    var component = this;

    /*
        NOTE; Couldn't create separate file for store and model data. Returned error
    */

    
    var chartStore = Ext.create("Ext.data.JsonStore", {
      fields: ["month", "data1", "data2"],
      data: [
        { month: "January", data1: 10, data2: 5 },
        { month: "February", data1: 20, data2: 15 },
        { month: "March", data1: 30, data2: 25 },
        { month: "April", data1: 15, data2: 10 },
        { month: "May", data1: 25, data2: 20 },
        { month: "June", data1: 35, data2: 30 },
        { month: "July", data1: 20, data2: 15 },
        { month: "August", data1: 30, data2: 25 },
        { month: "September", data1: 40, data2: 35 },
        { month: "October", data1: 25, data2: 20 },
        { month: "November", data1: 35, data2: 30 },
        { month: "December", data1: 45, data2: 40 },
      ],
    });

    // create the inputs for the chart data
    var monthInput = Ext.create({
      xtype: "textfield",
      fieldLabel: "Month",
      name: "month",
    });

    var data1Input = Ext.create({
      xtype: "numberfield",
      fieldLabel: "First two months sales",
      name: "data1",
    });

    var data2Input = Ext.create({
      xtype: "numberfield",
      fieldLabel: "Last two months sales",
      name: "data2",
    });

    // add the inputs to the view
    component.items = [
      monthInput,
      data1Input,
      data2Input,
      {
        xtype: "button",
        text: "Add Data",
        margin: "20 0",
        handler: function () {
          // add the new data to the chart store
          chartStore.add({
            month: monthInput.getValue(),
            data1: data1Input.getValue(),
            data2: data2Input.getValue(),
          });

          // clear the inputs
          monthInput.setValue("");
          data1Input.setValue("");
          data2Input.setValue("");
        },
      },
      {
        xtype: "cartesian",
        width: "100%",
        height: 500,
        store: chartStore, // use the new chart store here
        insetPadding: 50,
        innerPadding: 20,
        legend: {
          docked: "bottom",
        },
        interactions: ["rotate", "itemhighlight"],
        sprites: [
          {
            type: "text",
            text: "Bar Chart - Basic",
            font: "22px Helvetica",
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20, // the sprite y position
          },
          {
            type: "text",
            text: "Data: Example Data Set",
            font: "10px Helvetica",
            x: 12,
            y: 425,
          },
          {
            type: "text",
            text: "Source: MyApp",
            font: "10px Helvetica",
            x: 12,
            y: 440,
          },
        ],
        axes: [
          {
            type: "numeric",
            position: "left",
            fields: ["data1", "data2"],
            title: {
              text: "Data Points",
              fontSize: 15,
            },
            grid: true,
            minimum: 0,
            maximum: 50,
          },
          {
            type: "category",
            position: "bottom",
            fields: ["month"],
            title: {
              text: "Month",
              fontSize: 15,
            },
            label: {
              fontSize: 12,
              rotate: {
                degrees: -45,
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            xField: "month",
            yField: ["data1", "data2"],
            title: ["Data 1", "Data 2"],
            style: {
              opacity: 0.8,
            },
            highlight: {
              fillStyle: "yellow",
            },
            tooltip: {
              trackMouse: true,
            /*
                Note: error on setHtml() method to show the % on hover
            */
            //   renderer: function (storeItem, item) {
            //     this.setHtml(
            //       storeItem.get("month") + ": " + storeItem.get(item.field)
            //     );
            //   },
            },
          },
        ],
      },
    ];
    // call the superclass initComponent method
    component.callParent(arguments);
  },
});
