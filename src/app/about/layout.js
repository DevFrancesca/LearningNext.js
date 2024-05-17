// import Header from "../../components/Header";

export default function Layout({children}){
    // const state = "Francesca"
    return(
        <div>
            {/* <Header state={state} number={108}/> */}
            {children}
            <h1>This is about Layout</h1>
        </div>
    )
}