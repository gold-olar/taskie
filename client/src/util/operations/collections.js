import { apiRequest } from "../apiRequest";

const createACollection = (collectionData) => {
  return apiRequest("/taskie/collections/create", "POST", collectionData);
};

const fetchCollections = () => {
  return apiRequest("/taskie/collections", "GET");
};

export { createACollection, fetchCollections };
