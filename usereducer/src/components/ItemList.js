import React, { useReducer, useState } from "react";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SORT_ITEMS":
      return {
        ...state,
        items: [...state.items].sort((a, b) => {
          if (action.sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (action.sortBy === "created") {
            return a.id - b.id;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
}

const initialState = { items: [] };

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [editItemName, setEditItemName] = useState("");
  const [filterText, setFilterText] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleEditItem = (id, currentName) => {
    setEditItemId(id);
    setEditItemName(currentName);
  };

  const handleSaveEdit = () => {
    dispatch({ type: "EDIT_ITEM", id: editItemId, newName: editItemName });
    setEditItemId(null);
    setEditItemName("");
  };

  const handleSortItems = (sortBy) => {
    dispatch({ type: "SORT_ITEMS", sortBy });
  };

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search items"
      />

      <button onClick={() => handleSortItems("name")}>Sort by Name</button>
      <button onClick={() => handleSortItems("created")}>Sort by Created Time</button>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editItemName}
                  onChange={(e) => setEditItemName(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {item.name}
                <button onClick={() => handleEditItem(item.id, item.name)}>
                  Edit
                </button>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
