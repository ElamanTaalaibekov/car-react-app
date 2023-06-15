
import { FC } from "react"
import CarItem from "../screens/home/car-item/CarItem"
import { ICar } from "../../types/car.interface"

interface ICatalog {
  data?: ICar[]
}

const Catalog: FC<ICatalog> = ({data = []}) => {
    return (
        <div>
          {data.length ? (
            data.map(car => <CarItem key={car.id} car={car} />) 
          ) : (
            <p>There are no cars</p>
          )}
        </div>  
    )
}

export default Catalog