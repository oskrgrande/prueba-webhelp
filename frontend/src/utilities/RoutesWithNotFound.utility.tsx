import { Route, Routes } from "react-router-dom";
import {Children} from '@/models'

const RoutesWithNotFound = ({ children } : Children) => {
  return (
    <Routes>
        {children}
        <Route path='*' element={<>NOT FOUND</>} />
    </Routes>
  )
}
export default RoutesWithNotFound