import React from "react";
import { USER_INFO_API } from "../utils/constant";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy",
        avatar_url: "Default",
      },
    };
  }
  async componentDidMount() {
    const userInfo = await fetch(USER_INFO_API);
    const json = await userInfo.json();
    console.log("Data from class", json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location } = this.props;
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="card">
        <p>This is class based component card</p>
        <div>
          Name: {login} Location: {location}
          <img src={avatar_url} alt="" className="profile" />
        </div>
        <div>Instagram handle: vidhyamarch7</div>
      </div>
    );
  }
}
export default UserClass;
