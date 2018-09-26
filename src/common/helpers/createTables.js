'use strict';

var loopback = require('loopback');
var DATASOURCE_NAME = 'promosdb';
var dataSourceConfig = require('../../server/datasources.json');
var promosdb = new loopback.DataSource(dataSourceConfig[DATASOURCE_NAME]);

module.exports = {
  createTable: function() {
    var promosSchema = {
      'name': 'Promotion',
      'options': {
        'idInjection': false,
        'postgresql': {
          'schema': 'public',
          'table': 'promotions',
        },
      },
      'properties': {
        'id': {
          'type': 'Number',
          'length': null,
          'precision': null,
          'scale': 0,
          'id': true,
          'generated': true,
          'postgresql': {
            'columnName': 'id',
            'dataType': 'integer',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': 0,
            'nullable': 'NO',
          },
        },
        'eventId': {
          'type': 'Number',
          'required': true,
          'length': null,
          'precision': null,
          'scale': 0,
          'postgresql': {
            'columnName': 'event_id',
            'dataType': 'integer',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': 0,
            'nullable': 'NO',
          },
        },
        'code': {
          'type': 'String',
          'required': true,
          'length': 50,
          'precision': null,
          'scale': null,
          'postgresql': {
            'columnName': 'code',
            'dataType': 'character varying',
            'dataLength': 50,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
          },
        },
        'amount': {
          'type': 'Number',
          'required': true,
          'length': null,
          'precision': null,
          'scale': null,
          'postgresql': {
            'columnName': 'amount',
            'dataType': 'numeric',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
          },
        },
        'radius': {
          'type': 'Number',
          'required': true,
          'length': null,
          'precision': null,
          'scale': 0,
          'postgresql': {
            'columnName': 'radius',
            'dataType': 'integer',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': 0,
            'nullable': 'NO',
          },
        },
        'activated': {
          'type': 'Boolean',
          'required': false,
          'length': null,
          'precision': null,
          'scale': null,
          'default': false,
          'postgresql': {
            'columnName': 'activated',
            'dataType': 'boolean',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
            'default': false,
          },
        },
        'expired': {
          'type': 'Boolean',
          'required': false,
          'length': null,
          'precision': null,
          'scale': null,
          'default': false,
          'postgresql': {
            'columnName': 'expired',
            'dataType': 'boolean',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
            'default': false,
          },
        },
        'createdAt': {
          'type': 'String',
          'required': false,
          'length': null,
          'precision': null,
          'scale': null,
          'postgresql': {
            'columnName': 'created_at',
            'dataType': 'timestamp without time zone',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
          },
        },
        'updatedAt': {
          'type': 'String',
          'required': false,
          'length': null,
          'precision': null,
          'scale': null,
          'postgresql': {
            'columnName': 'updated_at',
            'dataType': 'timestamp without time zone',
            'dataLength': null,
            'dataPrecision': null,
            'dataScale': null,
            'nullable': 'YES',
          },
        },
      },
    };
    /* eslint-disable max-len */
    promosdb.discoverModelProperties('promotions', function(err, props) {
      if (Object.keys(props).length === 0) {
        promosdb.createModel(promosSchema.name, promosSchema.properties, promosSchema.options);
        promosdb.automigrate(function() {
          promosdb.discoverModelProperties('promotions', function(err, props) {
            console.log(props);
          });
        });
      }
    });
    /* eslint-enable max-len */
  },

};
