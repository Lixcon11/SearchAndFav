import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";

const SearcherOfFavorites= () => {
  const theme = "--favsTheme";
  const formEventHandler = event => {
    event.preventDefault();
    //new logic
  }

  return (
    <>
      <SearcherZone>
        <Title/>
          <SearcherContainer>
            <Searcher handler={formEventHandler}/>
            <LinkButtons theme={theme}/>
          </SearcherContainer>
      </SearcherZone>
    </>
  )
}

export default SearcherOfFavorites;