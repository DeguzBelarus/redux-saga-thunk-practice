import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import {
  numberIncrement,
  numberDecrement,
  numberReset,
  itemAdd,
  itemRemove,
} from "../redux/actions";
import {
  NUMBER_INCREMENT,
  NUMBER_DECREMENT,
  NUMBER_RESET,
  ITEM_ADD,
  ITEM_REMOVE,
} from "../redux/types";

export function* sagaWatcher() {
  yield takeEvery(NUMBER_INCREMENT, sagaNumberUpWorker);
  yield takeEvery(NUMBER_DECREMENT, sagaNumberDownWorker);
  yield takeEvery(NUMBER_RESET, sagaNumberResetWorker);
  yield takeEvery(ITEM_REMOVE, sagaItemRemoveWorker);
  yield takeEvery(ITEM_ADD, sagaItemAddWorker);
}

function* sagaNumberUpWorker() {
  yield put(itemAdd("Число было увеличено"));
  console.log("Число увеличено");
  document.body.style.backgroundColor = "green";
}

function* sagaNumberDownWorker() {
  yield put(itemAdd("Число было уменьшено"));
  console.log("Число уменьшено");
  document.body.style.backgroundColor = "red";
}

function* sagaNumberResetWorker() {
  yield put(itemAdd("Число было сброшено"));
  console.log("Число сброшено");
  document.body.style.backgroundColor = "white";
}

function* sagaItemRemoveWorker() {
  console.log("Элемент был удалён");
}

function* sagaItemAddWorker() {
  console.log(`Элемент был добавлен`);
}
