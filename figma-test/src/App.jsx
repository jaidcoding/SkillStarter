import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './assets/HomepageDesktop1';
import { SignIn } from './assets/SignIn';
import { RolePicker } from './assets/RolePicker';
import ComingSoon from './assets/ComingSoon';
import { CreateAccount } from './assets/CreateAccount';
import CompleteProfile from './assets/CompleteProfile';
import { ProfileSetup } from './assets/ProfileSetup';
import { MyProfile } from './assets/MyProfile';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomeScreen />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/RolePicker" element={<RolePicker />} />
      <Route path="/ComingSoon" element={<ComingSoon />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/CompleteProfile" element={<CompleteProfile />} />
      <Route path="/profile-setup" element={<ProfileSetup />} />
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  );
};

export default App;