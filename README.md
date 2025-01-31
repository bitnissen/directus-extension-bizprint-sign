# Directus Extension for BizPrint Signing (Flow Operation)

This extension allows you to sign a payload using application keys from Bizswoop BizPrint.

The operation returns a signed payload that can be used to GET/POST/PUT/PATCH against the HTTP API.

The official Bizprint HTTP API documentation can be found [here](https://github.com/bizswoop-development/bizprint-api/blob/master/docs/HTTP.md).

The operation returns an object with two keys: 
- The key `get` which contains a string ready for query string use, ie. for the GET-calls.
- The key `post` which contains a string ready for use in the body of a POST/PUT/PATCH-calls.

## Installation

You install this extension by unpacking the zip file into the extensions folder of your Directus installation.