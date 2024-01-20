import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import music from '../Music/Level1_bg.mp3'

const Level1 = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const correctPassword = '9922';
    if (password === correctPassword) {
      navigate('/NextLevel2');
    } else {
      alert('Think cutu think...');
    }
  };

  let myStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    margin: "40px 100px 100px 100px",
  }

  return (
    <div style={myStyle}>
      <audio src={music} autoPlay loop />
      <form onSubmit={handleSubmit} >
        <text style={{ whiteSpace: "pre-line", textAlign: "center" }}>
          {"Love and music, a perfect pair,<br/> In sweet harmony, they share,<br/> Through the that one app, we connect,<br/> Our love and music, an endless prospect.<br/><br/>".split("<br/>").join("\n")}
        </text>
        <label style={{}}>
          <input type="password" placeholder="4919315184" value={password} onChange={handlePasswordChange} />
        </label><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Level1;















// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import music from '../Music/Level1_bg.mp3'
// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Level1_1 = () => {
//     const [password, setPassword] = useState('');
    // let myStyle = {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     margin: "40px 100px 100px 100px",
    // }

//     return (
//         <div style={myStyle}>
//             <audio src={music} autoPlay loop />
//             <Form style={{ alignItems: "center" }} onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>
//                         <text style={{ whiteSpace: "pre-line", textAlign: "center" }}>
//                             {"Love and music, a perfect pair,<br/> In sweet harmony, they share,<br/> Through the that one app, we connect,<br/> Our love and music, an endless prospect.<br/><br/>".split("<br/>").join("\n")}
//                         </text>
//                     </Form.Label>
//                     <Form.Control type="password" placeholder="Gimme a kiss and I'll give you a hint.." value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </Form.Group><br></br>
//                 <Button variant="primary" type="submit">
//                     Go ahead!!!!
//                 </Button>
//             </Form>
//         </div>
//     );
// }

// export default Level1_1;