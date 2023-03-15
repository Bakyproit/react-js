import { Box } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import ListPage from './pages/ListPage';

function ProductFeature(props) {
    return (
        <Box sx={{pt:4,}}>
            <Switch>
                <Route path="/products" exact component={ListPage} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;