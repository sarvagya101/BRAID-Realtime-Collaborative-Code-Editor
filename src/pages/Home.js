import React, {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {Link, useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="homeGrid">
                <section className="brandPanel">
                    <div className="brandMark">
                        <span className="caret">▍</span>Braid
                    </div>
                    <p className="brandTagline">
                        Separate threads of code, woven into one. Write, run,
                        and debug together in the same file, in real time.
                    </p>

                    <div className="liveDemo" aria-hidden="true">
                        <div className="liveDemoHeader">
                            <span className="dot dot-amber"></span>
                            <span className="dot dot-teal"></span>
                            <span className="dot dot-violet"></span>
                            <span className="liveDemoTitle">session.js &mdash; 3 online</span>
                        </div>
                        <pre className="liveDemoBody">
<code><span className="ln">1</span><span className="com">// live room, three editors, zero conflicts</span>
<span className="ln">2</span><span className="kw">function</span> <span className="fn">mergeRoom</span><span className="punct">(</span>peers<span className="punct">)</span> <span className="punct">{'{'}</span>
<span className="ln">3</span>  <span className="kw">const</span> code <span className="punct">=</span> <span className="str">'shared-buffer'</span><span className="punct">;</span>
<span className="ln">4</span>  peers.<span className="fn">forEach</span><span className="punct">(</span>p <span className="punct">=&gt;</span> p.<span className="fn">sync</span><span className="punct">(</span>code<span className="punct">))</span><span className="punct">;</span>
<span className="ln">5</span>  <span className="kw">return</span> code<span className="typingCaret"></span><span className="punct">;</span>
<span className="ln">6</span><span className="punct">{'}'}</span></code>
                            <span className="peerTag p1">Aditi</span>
                            <span className="peerTag p2">Rehan</span>
                            <span className="peerTag p3">Zoya</span>
                        </pre>
                    </div>
                </section>

                <section className="formPanel">
                    <div className="formWrapper">
                        <div className="mobileBrandMark brandMark">
                            <span className="caret">▍</span>Braid
                        </div>
                        <h4 className="mainLabel">Generate a new room, or paste an invitation ROOM ID to join one already in progress.</h4>
                        <div className="inputGroup">
                            <span className="fieldLabel">Room ID</span>
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="e.g. 8f14e45f-ceea-467e"
                                onChange={(e) => setRoomId(e.target.value)}
                                value={roomId}
                                onKeyUp={handleInputEnter}
                            />
                            <span className="fieldLabel">Username</span>
                            <input
                                type="text"
                                className="inputBox"
                                placeholder="How others will see you"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                onKeyUp={handleInputEnter}
                            />
                            <button className="btn joinBtn" onClick={joinRoom}>
                                Join
                            </button>
                            <span className="createInfo">
                                Don't have an invite? &nbsp;
                                <Link
                                    onClick={createNewRoom}
                                    href=""
                                    className="createNewBtn"
                                >
                                    Create a new room
                                </Link>
                            </span>
                        </div>
                    </div>
                    <footer>
                        <h4>
                            Built by &nbsp;
                            <a href="#top">Sarvagya Sharma</a>
                        </h4>
                    </footer>
                </section>
            </div>
        </div>
    );
};

export default Home;
