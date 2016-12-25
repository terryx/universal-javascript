const React = require('react');


const Component = React.createClass({
    render: function () {

        return (
            <html>
                <head>
                    <title>Remount Example</title>
                </head>
                <body>
                    <div id="root"
                        dangerouslySetInnerHTML={{ __html: this.props.children }}>
                    </div>
                    <script id="app-state"
                        dangerouslySetInnerHTML={{ __html: this.props.state }}>
                    </script>
                    <script src="/dist/client.js"></script>
                </body>
            </html>
        );
    }
});


module.exports = Component;
