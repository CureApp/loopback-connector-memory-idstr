var MemoryConnector = require('loopback-datasource-juggler/lib/connectors/memory')

MemoryConnector.Memory.prototype.getDefaultIdType = function() {
  return String;
};

module.exports = MemoryConnector;
