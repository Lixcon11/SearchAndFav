/* eslint-disable react/prop-types */
import Searcher from "../App/Components/Searcher";
import LinkButtons from "../App/Components/LinkButtons";
import Title from "../App/Components/Title";
import SearcherZone from "../App/Components/SearcherZone";
import SearcherContainer from "../App/Components/SearcherContainer";
import SortBy from "../App/Components/SortBy";
import Media from "react-media";

const SearcherOfFavorites= ({ setPreferences }) => {
  const theme = "--favsTheme";
  const placeholder = "Look at favs"
  const formEventHandler = event => {
    event.preventDefault();
    setPreferences(state => ({...state, text:event.target.input.value}))
  }
  const functionToSortBy = e => {
    setPreferences(state=> ({...state, sortBy: e.target.innerText.toLowerCase()}))
  }

  return (
    <>
      <SearcherZone theme={theme}>
        <Title/>
          <SearcherContainer>
            <Searcher handler={formEventHandler} placeholder={placeholder}/>
            <Media query="only screen and (min-width: 1000px) ">
              {matches => {
                return matches ? null : <LinkButtons theme={theme}/>
              }}
            </Media>
          </SearcherContainer>
          <Media query="only screen and (min-width: 1000px) ">
            {matches => {
              return matches ? <LinkButtons theme={theme}/>: null
            }}
            </Media>
          <SortBy functionToSortBy={functionToSortBy}/>
      </SearcherZone>
    </>
  )
}

export default SearcherOfFavorites;