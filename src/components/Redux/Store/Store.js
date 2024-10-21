import CommonSlice from "../Slices/CommonSlice"
import PagesIndex from "../../Pages/PagesIndex";

const Store = PagesIndex.configureStore({
    reducer : {
        CommonSlice : CommonSlice.reducer
    }
})

export default Store