import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import taskieUsers from "../../util/static-data/taskieUsers";
import TaskieUser from "../TaskieUser";
import "./styles.scss";

const TaskiUsers = () => {
  return (
    <section className="taskie-users-section">
      <Container>
        <Row>
          <Col md={9} xs={11} className="m-auto">
            <Card className="taskie-users-section__card shadow">
              <h4> Featured Users </h4>
              <div>
                {taskieUsers.map((user) => (
                  <TaskieUser
                    image={user.image}
                    name={user.name}
                    key={user.name}
                  />
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaskiUsers;
