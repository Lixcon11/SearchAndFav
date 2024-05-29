/* eslint-disable react/prop-types */
import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";

const SearcherOfFavorites= ({ preferences, setPreferences }) => {
  const theme = "--favsTheme";
  const formEventHandler = event => {
    event.preventDefault();
    setPreferences(state => ({...state, text:event.target.input.value}))
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