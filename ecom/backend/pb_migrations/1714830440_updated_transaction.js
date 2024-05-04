/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  collection.listRule = ""
  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ogeacekh4kktio5")

  collection.listRule = null
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
