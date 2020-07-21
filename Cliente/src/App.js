import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//componentes
import Index from "./components/students/Index";
import Navbar from "./components/layouts/Navbar";
import Registro from "./components/students/Registro";
import Login from "./components/instructor/staff/Login";
import RegistroInstructor from "./components/instructor/staff/Registro";
import IndexInstructor from "./components/instructor/staff/Index";
import IndexControl from "./components/instructor/control/IndexControl"

//providers
import MapaState from "./contex/mapa/mapaState";
import StudentState from "./contex/students/studentsState";
import InstructorState from "./contex/instructor/instructorState";

function App() {
    return (
        <InstructorState>
            <MapaState>
                <StudentState>
                    <Router>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/student" component={Registro} />
                            <Route exact path="/instructor/login" component={Login} />
                            <Route exact path="/instructor/registro" component={RegistroInstructor} />
                            <Route exact path="/instructor" component={IndexInstructor} />
                            <Route exath path="/instructor/control" component={IndexControl} />
                        </Switch>
                    </Router>
                </StudentState>
            </MapaState>
        </InstructorState>
    );
}

export default App;
