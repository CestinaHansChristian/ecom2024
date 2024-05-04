/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("136m0uq5sta9cyo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gmqpibbm",
    "name": "Stocks",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("136m0uq5sta9cyo")

  // remove
  collection.schema.removeField("gmqpibbm")

  return dao.saveCollection(collection)
})
