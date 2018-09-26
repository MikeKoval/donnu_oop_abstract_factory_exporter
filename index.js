const args = require('yargs').argv

const AbstractExporter = require('./AbstractExporter');
const CsvExporter = require('./CsvExporter');
const JsonExporter = require('./JsonExporter');
const XlsExporter = require('./XlsExporter');
const XmlExporter = require('./XmlExporter');

const format = args.format;

const data = [
  { id: 1, name: "First name" },
  { id: 2, name: "Second name" },
];

const exporters = {
  json: JsonExporter,
  csv: CsvExporter,
  xls: XlsExporter,
  xml: XmlExporter,
};

if (!Object.keys(exporters).includes(format)) {
  throw new TypeError(`No supported --format, allowed values: ${Object.keys(exporters).join(', ')}`)
}

const Exporter = exporters[format];
const exporter = new Exporter(data);
console.log(exporter.export());