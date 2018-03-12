// Simulate a db
import low from 'lowdb';
import fse from 'fs-extra';
import {v1} from 'uuid';
const FileSync = require('lowdb/adapters/FileSync')

// database creator and migrator
const createDatabase = (name, initialState) => {
  const uuid = v1();
  fse.ensureDir(`/tmp/${uuid}`);
  const adapter = new FileSync(`/tmp/${uuid}/${name}.json`)
  const db = low(adapter);
  // DB Migration
  if(typeof initialState === "function") {
  	db.defaults(initialState())
  		.write();
  }
  return db;
}

module.exports = {
    createDatabase
}