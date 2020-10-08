import React, { lazy } from "react";
import { ADD_TASK, EDIT_PROFILE } from "../../../util/constants";

const AddTask = lazy(() =>
  import("../../../dashboard-components/modals/AddTask")
);
const EditProfile = lazy(() =>
  import("../../../dashboard-components/modals/EditProfile")
);

const allModals = {
  [ADD_TASK]: (setShowModal, data) => (
    <AddTask setShowModal={setShowModal} data={data} />
  ),
  [EDIT_PROFILE]: (setShowModal, data) => (
    <EditProfile setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
