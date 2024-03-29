# NodeJS - Wrapper with basic security that is configured in the prosess.env file.
First draft

## ABOUT
- Wrapper method of Adam Baldwin and Evan Hahn [Adam Baldwin and Evan Hahn helmet package](https://www.npmjs.com/package/helmet) 
- Wrapper with basic security that is configured in the prosess.env file.
- FIRST DRAFT

## Documentation & FAQ
The documentation & FAQ can be found at [Documentation and frequently asked questions (FAQ)](https://cloudoutloud.net/#/cloud-out-loud-response-header-config)  

## TL:DR
- Add the following process.env values to your server.js
- This can also be put into k8s secrets or configuration files to abstract the configs from the code base
- **process.env.BASE_SERVER_URL** *: This is the base server for the current application*
- **process.env.API_URL_HELMET_PATH** *:  This is the server where your API resides BFF ( back end for front end - to call all the other API's)*
- **process.env.UI_PACKAGE_PROVIDER_PATH** *: This is the ui provider path for the front end libraries eg. 'https://cdnjs.cloudflare.com'

- Below is an example of the values in the server.js: 
```
process.env.BASE_SERVER_URL = "http://localhost:3000"
process.env.API_URL_HELMET_PATH = "http://localhost:3001"
process.env.UI_PACKAGE_PROVIDER_PATH = "https://cdnjs.cloudflare.com"

const _response_headers_config = require('cloud-out-loud-reponse-header-config')
_response_headers_config.response_headers.init(app);
```

## Source code
The source can be found at [Github](https://github.com/Roche-Olivier/cloud-out-loud-response-header-config)  

## Issues
Issues can be logged at [Github issues](https://github.com/Roche-Olivier/cloud-out-loud-response-header-config/issues)  

## License
Copyright (c) 2010-2030 Roche Olivier (roche.olivier@outlook.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.