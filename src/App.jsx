import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  numberIncrement,
  numberDecrement,
  numberReset,
  itemAdd,
  itemRemove,
} from "../src/redux/actions";
import { getUsersThunkCreator } from "../src/redux/thunks";

import { Item } from "./components/Item/Item";
import { UserItem } from "./components/Item/UserItem/UserItem";
import { Loader } from "./components/Loader/Loader";

function App() {
  const itemsInput = useRef(null);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.main.thirdState);
  const users = useSelector((state) => state.main.users);
  const number = useSelector((state) => state.main.numberState);
  const isLoading = useSelector((state) => state.main.isLoading);

  const addItem = () => {
    if (!itemsInput.current.value) return;

    dispatch(itemAdd(itemsInput.current.value));
    itemsInput.current.value = "";
  };

  const addItemOnEnter = (event) => {
    if (!itemsInput.current.value) return;

    if (event.key === "Enter") {
      dispatch(itemAdd(itemsInput.current.value));
      itemsInput.current.value = "";
    }
  };

  const removeItem = (id) => {
    dispatch(itemRemove(id));
  };

  useEffect(() => {
    console.log(items);
    console.log(number);
  }, []);

  return (
    <>
      <input type="text" value={number} readOnly />
      <button type="button" onClick={() => dispatch(numberIncrement())}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(numberReset())}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch(numberDecrement())}>
        Decrement
      </button>

      <input type="text" ref={itemsInput} onKeyPress={addItemOnEnter} />
      <button type="button" onClick={addItem}>
        Добавить
      </button>
      <button type="button" onClick={() => getUsersThunkCreator()(dispatch)}>
        Загрузить (Thunk)
      </button>
      <div className="items-container">
        <div>
          {items.map((item, index) => {
            return (
              <Item
                text={item[0]}
                id={item[1]}
                removeItem={removeItem}
                key={index}
              />
            );
          })}
        </div>

        <div>
          {isLoading ? (
            <Loader />
          ) : (
            users.map((userData, index) => {
              return <UserItem userData={userData} key={index} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
