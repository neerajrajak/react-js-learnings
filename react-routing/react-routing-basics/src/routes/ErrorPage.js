import MainNavigation from "../components/MainNavigation";

const ErrorPage = ()=>{
    return <>
    <MainNavigation />
    <main>
        <h1>Page Not Found</h1>
        <p>Page you are looking for doesn't exist.</p>
    </main>
    </>
}

export default ErrorPage;