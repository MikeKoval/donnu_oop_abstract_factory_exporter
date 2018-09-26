class AbstractExporter {
  constructor() {
    if (this.constructor === AbstractExporter) {
      throw new TypeError('Abstract class "AbstractExporter" cannot be instantiated directly.');
    }

    if (this.export === undefined) {
      throw new TypeError('Classes extending the exporter abstract class');
    }
  }
}

module.exports = AbstractExporter;
