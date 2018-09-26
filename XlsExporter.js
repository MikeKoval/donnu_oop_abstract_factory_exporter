const json2xls = require('json2xls');
const AbstractExporter = require('./AbstractExporter');

class XlsExporter extends AbstractExporter {
  constructor(json) {
    super();
    this.json = json;
  }

  export() {
    return json2xls(this.json);
  }
}

module.exports = XlsExporter;
