/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("136m0uq5sta9cyo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gmqpibbm",
    "name": "product_stocks",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gmqpibbm",
    "name": "prodiuct_stocks",
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
})
