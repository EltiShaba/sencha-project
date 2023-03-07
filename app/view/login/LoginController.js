Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {
        var form = this.getView().down('form');
        if (form.isValid()) {
            var values = form.getValues();
            if (values.username === 'user' && values.password === 'password') {
                // Set the role to 'user' and the localStorage value to true
                localStorage.setItem('Role', 'user');
                localStorage.setItem('LoggedIn', 'user');
    
                // Remove Login Window
                this.getView().destroy();
    
                // Add the main view to the viewport
                Ext.create({
                    xtype: 'app-main'
                });
            } else if (values.username === 'admin' && values.password === 'password') {
                // Set the role to 'admin' and the localStorage value to true
                localStorage.setItem('Role', 'admin');
                localStorage.setItem('LoggedIn', 'admin');
    
                // Remove Login Window
                this.getView().destroy();
    
                // Add the main view to the viewport
                Ext.create({
                    xtype: 'app-main'
                });
            } else {
                Ext.Msg.alert('Login Failed', 'Invalid username or password.');
            }
        }
    }
});