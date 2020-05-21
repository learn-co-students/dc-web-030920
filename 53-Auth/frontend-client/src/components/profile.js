import React from "react";
import { Card, Image } from "semantic-ui-react";

/* props: {
  avatar: 'someURL',
  username: 'chandler Bing',
  bio: 'i like eggs'
} */

const Profile = (props) => {
  return (  props.currentUser ?
    <Card>
      <Image src={props.currentUser.avatar} />
      <Card.Content>
        <Card.Header>{props.currentUser.username}</Card.Header>

        <Card.Description>{props.currentUser.bio}</Card.Description>
      </Card.Content>
    </Card> : null
  );
}


export default Profile;
