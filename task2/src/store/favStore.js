import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const favStore = (set) => ({
    favs: [],  //initial state
    addFav: (favCat) => {
        set((state) => ({
            favs: [favCat, ...state.favs]

        }))
    }
})


const useFavStore = create(
    devtools(
        persist(favStore, {
            name: 'Favorites List'
        })
    )
)


export default useFavStore;