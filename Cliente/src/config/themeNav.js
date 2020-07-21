import { createMuiTheme} from "@material-ui/core/styles"
import blue from "@material-ui/core/colors/blue";


const themeNav = createMuiTheme({
    palette: {
        primary: {
            main: blue[400]
        },
        text: {
            primary: "#FFFF"
        }
    }
})

export default themeNav;