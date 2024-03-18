import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import { Component } from "react";
import { UserContext } from "../utils/userContext";
class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log("Component did mount");
  }

  componentDidUpdate() {
    // console.log("Component did update");
  }

  componentWillUnmount() {
    // console.log("Component will unmount");
  }
  render() {
    // console.log("Render HTML");
    return (
      <div>
        <div className="font-bold text-xl">
          LoggedIn USer:
          <UserContext.Consumer>
            {({ userLoggedIn }) => userLoggedIn}
          </UserContext.Consumer>
        </div>
        <h1>This is About us page</h1>
        <UserFunction name={"Vidya Satpute(function)"} />
        <UserClass name={"first child"} location={"Valsad"} />
      </div>
    );
  }
}

export default AboutUs;
//----------MOUNTING--------------//
//-----------Render Phase ---------|
// |- Parent Constructor            |
// |- Parent render                 |
// |                               |
// |   - First child Constructor   |
// |   - First child render        |
// |                               |
// |   - Second child Constructor  |
// |   - Second child render       |
// |                               |
// |   - Third child Constructor   |
// |   - Third child render        |
// |----------End render phase ----|
// |--------------Commit phase-----------|
// |   - First child componentDid mount  |
// |   - Second child componentDid mount |
// |   - Third child componentDid mount  |
// | - Parent didmount                    |
// |--------------End Commit phase-------|
