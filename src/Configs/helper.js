import { TODO_TYPES } from "./constants";

export const getButtonColorForTodo = (type) => {
  switch (type) {
    case TODO_TYPES.DONE:
      return "#43a047";
    case TODO_TYPES.IN_PROGRESS:
      return "rgb(234, 170, 96)";
    case TODO_TYPES.NOT_FINISHED:
      return "red";
    default:
      return null;
  }
};

export const createTodoData = (
  name,
  calories,
  type,
  carbs,
  protein,
  teamNumber,
  taskNumber
) => {
  return { name, calories, type, carbs, protein, teamNumber, taskNumber };
};
