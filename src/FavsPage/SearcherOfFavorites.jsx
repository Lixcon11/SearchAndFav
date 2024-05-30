/* eslint-disable react/prop-types */
import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";
import SortBy from "../App/Components/SortBy";

const SearcherOfFavorites= ({ setPreferences }) => {
  const theme = "--favsTheme";
  const formEventHandler = event => {
    event.preventDefault();
    setPreferences(state => ({...state, text:event.target.input.value}))
  }
  const functionToSortBy = e => {
    setPreferences(state=> ({...state, sortBy: e.target.innerText.toLowerCase()}))
  }

  return (
    <>
      <SearcherZone>
        <Title/>
          <SearcherContainer>
            <Searcher handler={formEventHandler}/>
            <LinkButtons theme={theme}/>
            <SortBy functionToSortBy={functionToSortBy}/>
          </SearcherContainer>
      </SearcherZone>
    </>
  )
}

export default SearcherOfFavorites;