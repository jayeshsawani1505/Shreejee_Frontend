"use client"

import { Provider } from "react-redux"
import { store } from "./lib/store/store"




const storeProvider = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default storeProvider