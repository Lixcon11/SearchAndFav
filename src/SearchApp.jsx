import { useSelector } from "react-redux";
import Body from "./App/Components/Body";
import ImageDisplayer from "./App/Components/ImageDisplayer";

const SearchApp = () => {
  
  
  return (
    <>
      <Body theme="--searchTheme"/>
      <section>
        <ImageDisplayer/>
      </section>
    </>
  )
}

export default SearchApp;