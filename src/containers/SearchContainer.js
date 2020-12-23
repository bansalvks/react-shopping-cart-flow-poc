import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from 'src/actions/ProductListingActions';

const SearchContainer = () => {
    const dispatch = useDispatch();
    const [
        query,
        setQuery,
    ] = useState('');

    const onQueryChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(searchAction({
            query,
        }));
    };

    return (
        <form
            className="input-group"
            onSubmit={onClickHandler}
        >
            <input
                onChange={onQueryChangeHandler}
                type="text"
                className="form-control"
                placeholder="Search Keyword..."
            />
            <button
                type="submit"
                className="input-group-text"
            >
                Search
            </button>
        </form>
    );
};

SearchContainer.propTypes = {

};

export default SearchContainer;
