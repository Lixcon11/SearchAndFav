/* eslint-disable react/prop-types */

const Searcher = ({ handler }) => {
    return (
        <>
            <form onSubmit={handler}>
                <input type="text" name="input"/>
            </form>
        </>
    )
}

export default Searcher;