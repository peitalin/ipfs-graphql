
### IPFS test
uses js-ipfs to communicate with IPFS network

### Property Details Service (GQL)
This is a GQL wrapper around an IPFS geojson API.


#### Dependencies and Installation
Developed on Node 7.6 for `async`/`await` support.  Getting started should be as simple as `npm`/`yarn` `install`

You'll also need to provide a client id and client secret for CoreLogic's API.  Once you have an account and created those, copy [the config template](config/local.json.template) into your own `local.json`, and fill in the required fields.    You can also pass these credentials by env variable if you prefer: `CORE_LOGIC_CLIENT_ID` and `CORE_LOGIC_SECRET`.

After that you should be able to `npm start` and query.  Here are [some examples](http://bit.ly/2qaKKS9) to get you started.
