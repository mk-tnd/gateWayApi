import ActiveTimePeriod from "./ActiveTimePeriod";

interface Restaurants {
  name: string,
  id: number,
  coverImage: string,
  activeTimePeriod: ActiveTimePeriod,
  menus: string[]
}

export default Restaurants;