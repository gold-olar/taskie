const BaseController = require("./base.ctrl");
const Collection = require("../models/Collections");

class CollectionController extends BaseController {
  constructor() {
    super();
  }

  async createCollection(req, res) {
    const {
      body: { title },
      headers: { user },
    } = req;
    try {
      const { userId } = JSON.parse(user);

      const exisstingCollection = await Collection.findOne({ title });

      if (exisstingCollection) {
        return super.sendError(res, null, "Collection already exists.", 400);
      }

      const collectionParams = {
        title,
        userId,
      };

      const newCollection = new Collection(collectionParams);
      newCollection.save().then(() =>
        super.sendSuccess(
          res,
          {
            collection: newCollection,
          },
          "Collection Created !",
          201
        )
      );
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async fetchCollections(req, res) {
    const {
      headers: { user },
    } = req;

    const { userId } = JSON.parse(user);

    try {
      const usersCollections = await Collection.find({ userId });

      if (!usersCollections) {
        return super.sendError(res, null, "No Collections found.", 400);
      }
      super.sendSuccess(
        res,
        {
          collections: usersCollections,
        },
        "Fetched Collections !",
        200
      );
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }

  async deleteCollection(req, res, next) {
    const {
      params: { collectionId },
    } = req;
    try {
      const collectionExists = await Collection.find({ _id: collectionId });
      if (!collectionExists) {
        return super.sendError(res, null, "Collection doesnot exist.", 400);
      }

      await Collection.findOneAndDelete({
        _id: collectionId,
      });

      return next();
    } catch (err) {
      return super.sendError(res, err, err.message, err.code);
    }
  }
}

module.exports = new CollectionController();
