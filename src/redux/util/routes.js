import Currency from "../../pages/Currency"
import Convert from "../../pages/Convert"
import NotFound from "../../pages/NotFound"

export const routes = [
    {
        path: "/convert",
        component: Convert
    },

    {
        path: "/",
        component: Currency
    },

    {
        path: "*",
        component: NotFound
    }

]