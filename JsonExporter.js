const AbstractExporter = require('./AbstractExporter');

class JsonExporter extends AbstractExporter {
  constructor(json) {
    super();
    this.json = json;
  }

  export() {
    return JSON.stringify(this.json);
  }
}

module.exports = JsonExporter;
