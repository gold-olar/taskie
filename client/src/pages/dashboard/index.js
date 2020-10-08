import React, { useState, Suspense } from "react";
import { Container, Row } from "react-bootstrap";
import DashboardContainer from "../../dashboard-components/DashboardContainer";
import DashboardComponent from "../../dashboard-components/DashboardComponent";
import PageLoader from "../../dashboard-components/PageLoader";
import Sidebar from "../../dashboard-components/Sidebar";
import { requireAuth, useAuth } from "../../util/auth";
import Modal from "../../dashboard-components/Modal";
import allModals from "./helper";
import { toast } from "react-toastify";

toast.configure({
  autoClose: 3000,
  hideProgressBar: true,
});

const Dashboard = ({ mediaQuery }) => {
  const [showModal, setShowModal] = useState({
    modalId: " ",
    show: false,
    data: {},
  });

  const auth = useAuth();

  // console.log(auth);

  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar setShowModal={setShowModal} userData={auth.user} />
          <DashboardContainer logout={auth.logout} mediaQuery={mediaQuery}>
            {showModal.show && (
              <Modal showModal={showModal} setShowModal={setShowModal}>
                <Suspense fallback={<PageLoader />}>
                  {allModals[showModal.modalId](setShowModal, showModal?.data)}
                </Suspense>
              </Modal>
            )}
            <DashboardComponent />
          </DashboardContainer>
        </Row>
      </Container>
    </>
  );
};

export default requireAuth(Dashboard);
