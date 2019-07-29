import {createMuiTheme} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

// a custom theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[50],
        },
    },
});

export default theme;
