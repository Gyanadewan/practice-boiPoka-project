import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { getStoredBook } from '../../pages/utilitis/AddToDB'
import Book from '../../pages/Books/Book/Book'

function ReadList() {

  const data = useLoaderData()
  const [readList, setReadList] = useState([])

  useEffect(() => {

    const storeBookData = getStoredBook()

    const ConvertedStoredBook = storeBookData.map(id => parseInt(id))

    const myReadList = data.filter(book =>
      ConvertedStoredBook.includes(book.bookId)
    )

    setReadList(myReadList)

  }, [data])

  return (
    <Tabs>

      <TabList>
        <Tab>Read Book List</Tab>
        <Tab>My Wish List</Tab>
      </TabList>

      <TabPanel>
        {
          readList.map(b =>
            <Book key={b.bookId} singleBook={b}></Book>
          )
        }
      </TabPanel>

      <TabPanel>
        <h2>My Wish List</h2>
      </TabPanel>

    </Tabs>
  )
}

export default ReadList