import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <>
            <h1>Ooops !</h1>
            <h4>Something went wrong..</h4>
            {err?.status && <h4>{err.status}, {err.statusText}</h4>}
            {err?.message && <h4>{err.message}</h4>}
        </>
    );
};
export default Error;