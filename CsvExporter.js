const json2csv = require('json2csv').parse;
const AbstractExporter = require('./AbstractExporter');

class CsvExporter extends AbstractExporter {
  constructor(json) {
    super();
    this.json = json;
  }

  export() {
    return json2csv(this.json);
  }
}

module.exports = CsvExporter;
