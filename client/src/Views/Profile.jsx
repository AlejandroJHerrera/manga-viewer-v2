import React from 'react';
import ProfileInfo from '../Components/ProfileInfo';
import UserCollection from '../Components/UserCollection';

function Profile() {
  return (
    <div className="">
      {/*  user info */}
      <ProfileInfo />
      {/* user manga viewed or liked */}
      <UserCollection />
    </div>
  );
}

export default Profile;
