import { useSelector } from "react-redux";
import Body from "./App/Components/Body";
import ImageDisplayer from "./App/Components/ImageDisplayer";

const SearchApp = () => {
  const searchSelector = useSelector(state => state.search)
  const imageFormat = (element, i) => <img src={element.urls.small} key={i}/>
  
  return (
    <>
      <Body theme="--searchTheme"/>
      <ImageDisplayer display={searchSelector} format={imageFormat}/>
    </>
  )
}

export default SearchApp;