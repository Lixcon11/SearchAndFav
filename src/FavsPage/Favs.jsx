import Body from "../App/Components/Body";
import FavoriteImageDisplayer from "./FavoriteImageDisplayer";

const Favs = () => {
  return(
    <>
    <Body theme="--favsTheme"/>
      <section className="image-container">
        <FavoriteImageDisplayer/>
      </section>
    </>
  )
}

export default Favs;