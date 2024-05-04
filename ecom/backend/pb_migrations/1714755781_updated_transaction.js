/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  // remove
  collection.schema.removeField("xxuwrbw3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgxejabt",
    "name": "total_price",
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
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxuwrbw3",
    "name": "total_price",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "136m0uq5sta9cyo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("dgxejabt")

  return dao.saveCollection(collection)
})
