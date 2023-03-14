import React, { useState } from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100vw;
  height: 100vh;

  .head {
    font-size: 25px;
  }

  .body {
    input {
      width: 300px;
      height: 40px;
      font-size: 25px;
    }
    button {
      width: 40px;
      height: 44px;
      font-size: 25px;
    }
  }

  .showItem {
    input {
      width: 300px;
      height: 40px;
      font-size: 25px;
    }
    button {
      width: 40px;
      height: 44px;
      font-size: 25px;
    }
  }

  .btn {
    button {
      font-size: 25px;
    }
  }
`;

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  // Add Item
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // Delete Item
  const deleteItem = (id) => {
    // console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind != id;
    });

    setItems(updatedItems);
  };

  // Remove all
  const removeAll = () => {
    setItems([]);
  };

  return (
    <TodoWrapper>
      <div className="head">
        <h4>Todo</h4>
      </div>
      <div className="body">
        <input
          type="text"
          value={inputData}
          name="input"
          onChange={(e) => {
            setInputData(e.target.value);
          }}
        />
        <button onClick={addItem}>+</button>
      </div>

      {items.map((elem, ind) => {
        return (
          <div className="showItem" key={ind}>
            <input type="text" name="" value={elem} readOnly />
            <button onClick={() => deleteItem(ind)}>x</button>
          </div>
        );
      })}

      <div className="btn">
        <button onClick={removeAll}>remove all</button>
      </div>
    </TodoWrapper>
  );
};

export default Todo;
