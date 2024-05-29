import Body from "../App/Components/Body";
import SearchImageDisplayer from "./SearchImageDisplayer";

const Search= () => {
  return (
    <>
      <Body theme="--searchTheme"/>
      <section className="image-container">
        <SearchImageDisplayer/>
      </section>
    </>
  )
}

export default Search;