# Carbon.InjectJavascriptOnLoginPage

Inject JavaScript into the Neos backend login page.

## Installation

Install the package with Composer:

```bash
composer require carbon/inject-javascript-on-login-page
```

The package automatically loads `AddAutoComplete.js` on the login page. It sets
the username and password fields' `autocomplete` attributes to `username` and
`current-password`.

## Add your own JavaScript

Add a script to a package's `Resources/Public` directory, then register it in
that package's `Configuration/Settings.yaml`:

```yaml
Carbon:
  InjectJavascriptOnLoginPage:
    javascript:
      My.Site.LoginScript:
        resource: 'resource://My.Site/Public/JavaScript/login.js'
        attributes:
          type: 'module'
```

Each entry under `javascript` adds a `<script>` element before the closing
`</head>` tag of the backend login page. Use a `resource://` URI for a file
from a Neos package. The `resource` value can also be a URL, and `attributes`
can contain additional script element attributes.
