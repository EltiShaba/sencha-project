Ext.define('MyApp.view.ticket.TicketController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.ticket',

    requires: [
        // 'Ext.Msg'
    ],

    onAddClick: function() {
        var user = localStorage.getItem('Role');
        if (user && user === 'admin') {
            var grid = this.getView();
            var store = grid.getStore();
            var model = Ext.create('MyApp.model.Ticket', {
                id: '',
                inbound: '',
                outbound: '',
                ticket_type: '',
                ticket_type_id: '',
                price: 0,
                from_date: new Date(),
                to_date: new Date(),
                seat_number: ''
            });
            store.insert(0, model);
            //ERROR: Cannot read properties of null (reading 'startEdit'). Trying to fix the error, but without success.
            grid.getPlugin('rowediting').startEdit(0, 0);
        } else {
            Ext.MessageBox.alert('Access Denied', 'Only admin can add tickets.');
        }
    },

    onRender: function() {
        console.log('The Ticket view has been rendered!');
    },

    onRemoveClick: function() {
        var user = localStorage.getItem('Role');
        if (user && user === 'admin') {
            var grid = this.getView();
            var store = grid.getStore();
            var selection = grid.getSelection();
            if (selection) {
                store.remove(selection);
            }
        } else {
            Ext.MessageBox.alert('Access Denied', 'Only admin can remove tickets.');
        }
    },

    onSelectionChange: function() {
        var removeBtn = this.lookupReference('btnRemove');
        removeBtn.setDisabled(this.getView().getSelection().length === 0);
    }
});
