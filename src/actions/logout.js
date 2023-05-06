import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify"

import {deleteItem} from "../helpers"

export async function logoutAction(){
    // delete the user
    deleteItem({
            key: "userName"
    })

    toast("You've deleted your account!")
    alert("You've deleted your account!")

    // return redirect
    return redirect("/")

}