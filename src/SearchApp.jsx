import Body from "./App/Components/Body";
import ImageDisplayer from "./App/Components/ImageDisplayer";

const SearchApp = () => {
  return (
    <>
      <Body theme="--searchTheme"/>
      <section className="image-container">
        <ImageDisplayer/>
      </section>
    </>
  )
}

export default SearchApp;