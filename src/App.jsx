import "./App.css"
import Reviews from "./components/Reviews/Reviews"
import FullData from "./FullData/FullData"

// const { review } = FullData.reviews

function App() {
    return (
        <>
            <Reviews reviews={FullData.reviews}></Reviews>
        </>
    )
}

export default App
