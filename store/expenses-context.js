import { createContext, useReducer } from "react";

const Dumy_Expenses = [
  {
    id: "x1",
    dis: "pay booke",
    amount: 13.54,
    date: new Date("2023-3-2"),
  },
  {
    id: "x2",
    dis: "pay booke",
    amount: 119.54,
    date: new Date("2023-3-9"),
  },
  {
    id: "x3",
    dis: "pay teal",
    amount: 30.54,
    date: new Date("2023-3-18"),
  },
  {
    id: "x4",
    dis: "pay sloat",
    amount: 110.54,
    date: new Date("2023-3-20"),
  },
  {
    id: "x5",
    dis: "pay cola",
    amount: 13.54,
    date: new Date("2023-3-27"),
  },
  {
    id: "x6",
    dis: "pay water",
    amount: 13.54,
    date: new Date("2023-4-19"),
  },
  {
    id: "x7",
    dis: "test",
    amount: 20.54,
    date: new Date("2023-4-20"),
  },
  {
    id: "x4",
    dis: "pay sloat",
    amount: 110.54,
    date: new Date("2023-4-21"),
  },
  {
    id: "x5",
    dis: "pay cola",
    amount: 13.54,
    date: new Date("2023-4-22"),
  },
  {
    id: "x6",
    dis: "pay water",
    amount: 13.54,
    date: new Date("2023-4-23"),
  },
  {
    id: "x7",
    dis: "test",
    amount: 20.54,
    date: new Date("2023-4-24"),
  },
];

export   const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ dis, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { dis, amount, date }) => {},
});

function expenseReducer(state, action) {
  const id = new Date().toString() + Math.random().toString();
  switch (action.type) {
    case "Add":
      return [{ ...action.payload, id: id }, ...state];
    case "Delete":
      return state.filter((expense) => expense.id !== action.payload.id);
    case "Update":
      const updatableExpenseIndex = state.findIndex((axpens) => {
        axpens.id === action.payload.id;
      });
      const updatableExpense = state[updatableExpenseIndex];
      const updateItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updateItem;
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, Dumy_Expenses);

  function addExpense(expenseData) {
    dispatch({ type: "Add", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "Delete", payload: id });
  }

  function updateExpense(id, expenseDate) {
    dispatch({ type: "Update", payload: { id: id, data: expenseDate } });
  }
 const value={
    expenses:expensesState,
    addExpense:addExpense,
    deleteExpense:deleteExpense,
    updateExpense:updateExpense
 }
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
export default ExpenseContextProvider;
