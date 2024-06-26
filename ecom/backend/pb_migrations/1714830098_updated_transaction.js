/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8sm051f4",
    "name": "customer_name",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  // remove
  collection.schema.removeField("8sm051f4")

  return dao.saveCollection(collection)
})
