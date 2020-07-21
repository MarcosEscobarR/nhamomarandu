import { createMuiTheme} from "@material-ui/core/styles"
import deepPurple from "@material-ui/core/colors/deepPurple";


const themeNavInstructor = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[400]
        },
        text: {
            primary: "#FFFF"
        }
    }
})

export default themeNavInstructor;