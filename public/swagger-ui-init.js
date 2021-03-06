
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "components": {
      "schemas": {
        "ErrorResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean",
              "default": false
            },
            "message": {
              "type": "string"
            }
          }
        },
        "AddressBalanceResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "unconfirmed": {
              "type": "number",
              "format": "int"
            },
            "confirmed": {
              "type": "number",
              "format": "int"
            }
          }
        },
        "AddressHistoryTx": {
          "type": "object",
          "properties": {
            "height": {
              "type": "number",
              "format": "int"
            },
            "tx_hash": {
              "type": "string"
            }
          }
        },
        "AddressHistoryResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AddressHistoryTx"
              }
            }
          }
        },
        "AddressMempoolTx": {
          "type": "object",
          "properties": {
            "fee": {
              "type": "number",
              "format": "int"
            },
            "height": {
              "type": "number",
              "format": "int"
            },
            "tx_hash": {
              "type": "string"
            }
          }
        },
        "AddressMempoolResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AddressMempoolTx"
              }
            }
          }
        },
        "AddressUtxo": {
          "type": "object",
          "properties": {
            "tx_hash": {
              "type": "string"
            },
            "tx_pos": {
              "type": "number",
              "format": "int"
            },
            "height": {
              "type": "number",
              "format": "int"
            },
            "value": {
              "type": "number",
              "format": "int"
            }
          }
        },
        "AddressUtxosResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AddressUtxo"
              }
            }
          }
        },
        "BlockHeader": {
          "type": "string"
        },
        "BlockHeadersResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txs": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/BlockHeader"
              }
            }
          }
        },
        "TransactionData": {
          "type": "string"
        },
        "TransactionDataResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txdata": {
              "$ref": "#/components/schemas/TransactionData"
            }
          }
        },
        "MerkleBranch": {
          "type": "string"
        },
        "TransactionMerkleResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "merkle": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MerkleBranch"
              }
            }
          }
        },
        "TransactionBroadcastResponse": {
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "txid": {
              "type": "string"
            }
          }
        }
      }
    },
    "openapi": "3.0.0",
    "info": {
      "description": "insomnia.fountainhead.cash provides an easy way to interact with the Bitcoin Cash blockchain using HTTP. It is built on top of the electrum protocol which powers Electron Cash. Join our chat [t.me/fountainheadcash](https://t.me/fountainheadcash) and [view the code](https://github.com/fountainhead-cash/insomnia)",
      "version": "0.0.1",
      "title": "INSOMNIA"
    },
    "paths": {
      "/address/balance/{address}": {
        "get": {
          "tags": [
            "address"
          ],
          "summary": "Address BCH balance",
          "description": "Returns the confirmed and unconfirmed balance of an address in satoshis",
          "parameters": [
            {
              "name": "address",
              "in": "path",
              "description": "the address in cashAddr, SLP, or legacy format",
              "required": true,
              "example": "bitcoincash:qpr270a5sxphltdmggtj07v4nskn9gmg9yx4m5h7s4",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddressBalanceResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Received an invalid Bitcoin Cash address as input.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse",
                    "message": "Received an invalid Bitcoin Cash address as input."
                  }
                }
              }
            }
          }
        }
      },
      "/address/history/{address}": {
        "get": {
          "tags": [
            "address"
          ],
          "summary": "Address transaction history",
          "description": "Returns the list of past transactions for an address",
          "parameters": [
            {
              "name": "address",
              "in": "path",
              "description": "the address in cashAddr, SLP, or legacy format",
              "required": true,
              "example": "bitcoincash:qpr270a5sxphltdmggtj07v4nskn9gmg9yx4m5h7s4",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddressHistoryResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Received an invalid Bitcoin Cash address as input.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse",
                    "message": "Received an invalid Bitcoin Cash address as input."
                  }
                }
              }
            }
          }
        }
      },
      "/address/mempool/{address}": {
        "get": {
          "tags": [
            "address"
          ],
          "summary": "Address unconfirmed transactions",
          "description": "Returns the list of unconfirmed transactions for an address",
          "parameters": [
            {
              "name": "address",
              "in": "path",
              "description": "the address in cashAddr, SLP, or legacy format",
              "required": true,
              "example": "bitcoincash:qpr270a5sxphltdmggtj07v4nskn9gmg9yx4m5h7s4",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddressMempoolResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Received an invalid Bitcoin Cash address as input.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse",
                    "message": "Received an invalid Bitcoin Cash address as input."
                  }
                }
              }
            }
          }
        }
      },
      "/address/utxos/{address}": {
        "get": {
          "tags": [
            "address"
          ],
          "summary": "Address UTXOs",
          "description": "Returns the list of UTXOs for an address",
          "parameters": [
            {
              "name": "address",
              "in": "path",
              "description": "the address in cashAddr, SLP, or legacy format",
              "required": true,
              "example": "bitcoincash:qpr270a5sxphltdmggtj07v4nskn9gmg9yx4m5h7s4",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AddressUtxosResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Received an invalid Bitcoin Cash address as input.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse",
                    "message": "Received an invalid Bitcoin Cash address as input."
                  }
                }
              }
            }
          }
        }
      },
      "/block/headers/{height}": {
        "get": {
          "tags": [
            "block"
          ],
          "summary": "Block headers",
          "description": "Get block headers by height",
          "parameters": [
            {
              "name": "height",
              "in": "path",
              "description": "Block height",
              "required": true,
              "example": 500000,
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "count",
              "in": "query",
              "description": "Total headers to retrive (up to 2016)",
              "required": false,
              "example": 10,
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "cp_height",
              "in": "query",
              "description": "Checkpoint height, a non-negative integer",
              "required": false,
              "example": 0,
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/BlockHeadersResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Received an invalid block height.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorResponse",
                    "message": "Received an invalid block height or count."
                  }
                }
              }
            }
          }
        }
      },
      "/tx/data/{txid}": {
        "get": {
          "tags": [
            "transaction"
          ],
          "summary": "Return the raw transaction data.",
          "description": "returns a string that is serialized, hex-encoded data for 'txid'.",
          "parameters": [
            {
              "in": "path",
              "name": "txid",
              "description": "The transaction id",
              "required": true,
              "example": "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionDataResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Transaction not found"
            }
          }
        }
      },
      "/tx/merkle/{txid}/{height}": {
        "get": {
          "tags": [
            "transaction"
          ],
          "summary": "Get merkle branch to a transaction given txid and block height",
          "description": "Bulk Details about a transaction",
          "parameters": [
            {
              "in": "path",
              "name": "txid",
              "description": "The transaction id",
              "required": true,
              "example": "a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "height",
              "in": "path",
              "description": "Block height",
              "required": true,
              "example": 57043,
              "schema": {
                "type": "number"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TransactionMerkleResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Transaction not found"
            }
          }
        }
      },
      "/tx/broadcast": {
        "post": {
          "tags": [
            "transaction"
          ],
          "summary": "Submits raw transaction to network.",
          "description": "Submits raw transaction (serialized, hex-encoded) to bitcoin network.",
          "requestBody": {
            "description": "raw tx hex",
            "required": true,
            "content": {
              "text/plain": {
                "schema": {
                  "$ref": "#/components/schemas/TransactionBroadcastResponse"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successful operation"
            },
            "400": {
              "description": "Transaction not found"
            }
          }
        }
      }
    },
    "servers": [
      {
        "url": "/v1"
      }
    ],
    "tags": [
      {
        "name": "address",
        "description": "Address details and utxo"
      },
      {
        "name": "block",
        "description": "Block Details"
      },
      {
        "name": "transaction",
        "description": "Transaction details"
      }
    ]
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
