import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';


ProductSort.propTypes = {
    currentSort : PropTypes.string.isRequired,
    onChange : PropTypes.func , 
};

function ProductSort({currentSort,onChange}) {
    const handleSortChange = (event , newValue) => {
        if(onChange) onChange(newValue) ;
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange} 
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
        >
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao tới thấp" value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;