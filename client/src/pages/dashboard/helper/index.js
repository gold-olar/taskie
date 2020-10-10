import React, { lazy } from "react";
import {
  ADD_TASK,
  EDIT_PROFILE,
  VIEW_TASK,
  ADD_COLECTION,
} from "../../../util/constants";

const AddTask = lazy(() =>
  import("../../../dashboard-components/modals/AddTask")
);
const AddCollection = lazy(() =>
  import("../../../dashboard-components/modals/AddCollection")
);
const EditProfile = lazy(() =>
  import("../../../dashboard-components/modals/EditProfile")
);
const ViewTask = lazy(() =>
  import("../../../dashboard-components/modals/ViewTask")
);

const allModals = {
  [ADD_TASK]: (setShowModal, data) => (
    <AddTask setShowModal={setShowModal} data={data} />
  ),
  [EDIT_PROFILE]: (setShowModal, data) => (
    <EditProfile setShowModal={setShowModal} data={data} />
  ),
  [VIEW_TASK]: (setShowModal, data) => (
    <ViewTask setShowModal={setShowModal} data={data} />
  ),
  [ADD_COLECTION]: (setShowModal, data) => (
    <AddCollection setShowModal={setShowModal} data={data} />
  ),
};

export default allModals;
