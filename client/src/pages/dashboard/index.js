import React, { useState, Suspense, useEffect } from "react";
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
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    mediaQuery !== "isMobile" && setShowSideBar(true);
  }, [mediaQuery]);

  const auth = useAuth();

  return (
    <>
      <Container fluid>
        <Row>
          {showSideBar && (
            <Sidebar
              setShowModal={setShowModal}
              userData={auth.user}
              setShowSideBar={setShowSideBar}
              mediaQuery={mediaQuery}
            />
          )}

          {(mediaQuery === "isMobile" && showSideBar === false) ||
          mediaQuery !== "isMobile" ? (
            <DashboardContainer
              setShowSideBar={setShowSideBar}
              logout={auth.logout}
              mediaQuery={mediaQuery}
            >
              {showModal.show && (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                  <Suspense fallback={<PageLoader />}>
                    {allModals[showModal.modalId](
                      setShowModal,
                      showModal?.data
                    )}
                  </Suspense>
                </Modal>
              )}
              <DashboardComponent
                setShowModal={setShowModal}
                mediaQuery={mediaQuery}
              />
            </DashboardContainer>
          ) : null}
        </Row>
      </Container>
    </>
  );
};

export default requireAuth(Dashboard);
