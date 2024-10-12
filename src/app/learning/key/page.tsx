'use client'
import { useState } from 'react'

export default function Page() {
  const [items, setItems] = useState<
    {
      name: string
      id: number
    }[]
  >([
    { name: 'item1', id: 1 },
    { name: 'item2', id: 2 },
    { name: 'item3', id: 3 },
  ])
  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        name: `item${prev.length + 1}`,
        id: prev.length + 1,
      },
    ])
  }
  const updateItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, name: 'updated' + new Date().getTime() }
          : item,
      ),
    )
  }
  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const sortItems = () => {
    setItems((prev) => [...prev.reverse()])
  }
  return (
    <div>
      <h1>Page</h1>
      <button className="border" onClick={addItem}>
        Add
      </button>
      <button onClick={sortItems}>Sort items</button>
      <br />
      {items.map((item, index) => (
        <div key={index}>
          {item.name}{' '}
          <button className="border" onClick={() => updateItem(item.id)}>
            Update
          </button>
          <button className="border" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}
