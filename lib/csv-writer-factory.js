
'use strict';

const ArrayCsvConverter = require('./array-csv-converter');
const CsvWriter = require('./csv-writer');
const FieldStringifier = require('./field-stringifier');
const ObjectCsvConverter = require('./object-csv-converter');
const fs = require('fs');

class CsvWriterFactory {

    createArrayRecordWriter(params) {
        const arrayCsvConverter = new ArrayCsvConverter({
            fieldStringifier: new FieldStringifier(),
            header: params.header
        });
        return new CsvWriter({
            csvConverter: arrayCsvConverter,
            encoding: params.encoding,
            fs,
            path: params.path
        });
    }

    createObjectRecordWriter(params) {
        const objectCsvConverter = new ObjectCsvConverter({
            fieldStringifier: new FieldStringifier(),
            header: params.header
        });
        return new CsvWriter({
            csvConverter: objectCsvConverter,
            encoding: params.encoding,
            fs,
            path: params.path
        });
    }

}

module.exports = CsvWriterFactory;