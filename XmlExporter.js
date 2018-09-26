const json2xml = require('json2xml');
const AbstractExporter = require('./AbstractExporter');

class XmlExporter extends AbstractExporter {
  constructor(json) {
    super();
    this.json = json;
  }

  export() {
    return json2xml(this.json);
  }
}

module.exports = XmlExporter;
