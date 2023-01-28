import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = ()=>{

    const navigation = useNavigation();
    
    return <>
    <MainNavigation />
    <main>
        { navigation.state === 'loading' && <p>Your result is being loaded....</p>}
        <Outlet/>
    </main>
    </>
}

export default Root;