import { notifyUser } from "../../../../util/helper-functions";
import { createACollection } from "../../../../util/operations/collections";

export const handleCollectionCreation = async (
  formData,
  setLoading,
  setShowModal,
  addNewCollection
) => {
  setLoading(true);

  const response = await createACollection(formData);
  response && setLoading(false);
  response && notifyUser(response);
  if (response && response.status) {
    addNewCollection(response.data);
    return setShowModal({
      show: false,
    });
  }
  return setLoading(false);
};
