import { createMuiTheme} from "@material-ui/core/styles"
import teal from "@material-ui/core/colors/teal";


const themeNavInstructor = createMuiTheme({
    palette: {
        primary: {
            main: teal[700]
        },
        text: {
            primary: "#FFFF"
        }
    }
})

export default themeNavInstructor;