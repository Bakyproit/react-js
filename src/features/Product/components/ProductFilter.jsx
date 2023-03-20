import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import FiltersByService from './Filters/FilterByService';
import FiltersByCategory from './Filters/FiltersByCategory';
import FiltersByPrice from './Filters/FiltersByPrice';

ProductFilter.propTypes = {
    filters : PropTypes.object.isRequired ,
    onChange: PropTypes.func,
};

function ProductFilter({filters , onChange}) {

    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return ;
        const newFilters = {
            "category.id" : newCategoryId ,
        };
        onChange(newFilters) ;
    };

    const handleChange = (values) =>{
        // console.log(values);
        if(onChange){
            onChange(values)
        }
    };
    return (
        <Box>
            {/* loc theo san pham - api*/}
            <FiltersByCategory onChange={handleCategoryChange} /> 
             {/*loc theo gia  */}
            <FiltersByPrice onChange={handleChange} />
            <FiltersByService filter={filters} onChange={handleChange}/>
        </Box>
    );
}

export default ProductFilter;