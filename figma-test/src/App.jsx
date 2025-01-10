import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WelcomeScreen } from './assets/HomepageDesktop1';
import { SignIn } from './assets/SignIn';
import { RolePicker } from './assets/RolePicker';
import ComingSoon from './assets/ComingSoon'; // Fix import statement
import { CreateAccount } from './assets/CreateAccount'; // Import CreateAccount component
import { CompleteProfile } from './assets/CompleteProfile'; // Import CompleteProfile component
import { ProfileSetup } from './assets/ProfileSetup'; // Import ProfileSetup component
import { MyProfile } from './assets/MyProfile'; // Import MyProfile component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomeScreen />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/RolePicker" element={<RolePicker />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/CreateAccount" element={<CreateAccount />} /> {/* Add route for CreateAccount */}
        <Route path="/CompleteProfile" element={<CompleteProfile />} /> {/* Add route for CompleteProfile */}
        <Route path="/profile-setup" element={<ProfileSetup />} /> {/* Add route for ProfileSetup */}
        <Route path="/my-profile" element={<MyProfile />} /> {/* Add route for MyProfile */}
      </Routes>
    </Router>
  );
}

export default App;