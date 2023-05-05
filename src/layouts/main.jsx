// helper function
import { useLoaderData, Outlet } from "react-router-dom";
import fetchData from "../helpers"

// assets 
import wave from "../assets/wave.svg"

// elements
import Nav from "../components/Nav";

// loader
export function mainLoader(){
    const userName = fetchData("userName");
    return { userName }
} 

const Main = () => {
    const { userName } = useLoaderData()

    return (
        <div className="layout">
            <Nav />
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="" />
        </div>
    )
}
 
export default Main