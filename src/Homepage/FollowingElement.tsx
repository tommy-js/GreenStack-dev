import React, { useContext } from "react";
import UnfollowUser from "../resolvers/UnfollowUser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  userId: any;
}

interface Props extends Redux {
  secondaryUserId: number;
  username: string;
}

const FollowingElement: React.FC<Props> = (props) => {
  return (
    <div className="homepage_block_component">
      <Link className="block_link" to={`/home/user/${props.secondaryUserId}`}>
        <p className="element_username">
          {props.username} id: {props.secondaryUserId}
        </p>
      </Link>
      <p className="following_element_descriptor">props.descriptor</p>
      <UnfollowUser userId={props.userId} followerId={props.secondaryUserId} />
    </div>
  );
};

export default connect(mapStateToProps)(FollowingElement);
