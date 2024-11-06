import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({item,upDateTask,deleteTask}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={`todo-item`}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={()=>deleteTask(item._id)}>삭제</button>
            <button className="button-delete" onClick={()=>upDateTask(item._id)}>끝남</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
