import {
  NUMBER_INCREMENT,
  NUMBER_DECREMENT,
  NUMBER_RESET,
  ITEM_ADD,
  ITEM_REMOVE,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USERS,
} from "../redux/types";

export function numberIncrement() {
  return {
    type: NUMBER_INCREMENT,
  };
}

export function numberDecrement() {
  return {
    type: NUMBER_DECREMENT,
  };
}

export function numberReset() {
  return {
    type: NUMBER_RESET,
  };
}

export function itemAdd(newItem) {
  return {
    type: ITEM_ADD,
    payload: newItem,
  };
}

export function itemRemove(removedItem) {
  return {
    type: ITEM_REMOVE,
    payload: removedItem,
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function getUsers(fetchedUsers) {
  return {
    type: GET_USERS,
    payload: fetchedUsers,
  };
}
